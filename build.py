#!/usr/bin/env python3
"""
余玉桂战略研究室 —— 双语静态站点生成器

写作约定（见 AUTHORING.md）：
  - 每篇文章 content/<分类>/<slug>.md
  - YAML front-matter + 正文，正文用 '<!-- lang: en -->' 切分中/英
  - 缺失语言回退到另一语言并标记 fallback

输出：
  dist/zh/...   dist/en/...   以及根 index.html（语言自适应跳转）
"""
import os, re, sys, html, shutil, datetime
from pathlib import Path

import yaml
import markdown
from jinja2 import Environment, FileSystemLoader, select_autoescape

ROOT = Path(__file__).resolve().parent
CONTENT = ROOT / "content"
TMPL = ROOT / "templates"
DIST = ROOT / "dist"
SITE_YML = ROOT / "site.yml"

LANG_SEP = re.compile(r"^\s*<!--\s*lang:\s*en\s*-->\s*$", re.MULTILINE | re.IGNORECASE)
FM_RE = re.compile(r"^\s*---\s*\n(.*?)\n---\s*\n?(.*)$", re.DOTALL)


def die(msg):
    print("ERROR:", msg, file=sys.stderr)
    sys.exit(1)


def load_site():
    with open(SITE_YML, encoding="utf-8") as f:
        return yaml.safe_load(f)


def split_lang(body: str):
    """返回 (zh, en, has_en)。若文件以 en 分隔符开头，则 zh 为空。"""
    m = LANG_SEP.search(body)
    if m:
        zh = body[: m.start()].strip()
        en = body[m.end():].strip()
        return zh, en, True
    return body.strip(), "", False


def parse_article(path: Path, site):
    raw = path.read_text(encoding="utf-8")
    m = FM_RE.match(raw)
    if not m:
        die(f"{path}: 缺少 YAML front-matter（--- ... ---）")
    try:
        meta = yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError as e:
        die(f"{path}: front-matter YAML 解析失败。\n"
            f"  常见原因：含冒号(:)/引号/破折号的值未加引号。\n  {e}")
    body = m.group(2)
    zh, en, has_en = split_lang(body)

    slug = path.stem
    rel_cat = path.parent.relative_to(CONTENT).parts[0]

    for k in ("title", "date"):
        if k not in meta:
            die(f"{path}: front-matter 缺少必填字段 '{k}'")

    title = meta["title"]
    # 拆双语标题：优先按 " / " 分隔
    if " / " in title:
        tzh, ten = title.split(" / ", 1)
    else:
        tzh = ten = title

    return {
        "slug": slug,
        "category": rel_cat,
        "path": path,
        "title": {"zh": tzh.strip(), "en": ten.strip()},
        "date": meta["date"],
        "date_iso": str(meta["date"]),
        "date_str": {
            "zh": _fmt_date(meta["date"], "zh"),
            "en": _fmt_date(meta["date"], "en"),
        },
        "description": _as_bilingual(meta.get("description", "")),
        "order": meta.get("order", 0),
        "draft": bool(meta.get("draft", False)),
        "body": {"zh": zh, "en": en},
        "has_en": has_en,
    }


def _fmt_date(d, lang):
    if isinstance(d, str):
        try:
            d = datetime.date.fromisoformat(d)
        except Exception:
            return d
    if lang == "zh":
        return f"{d.year}年{d.month}月{d.day}日"
    return d.strftime("%b %-d, %Y")


def _as_bilingual(v):
    if isinstance(v, dict):
        return {"zh": v.get("zh", ""), "en": v.get("en", "")}
    s = str(v or "")
    if " / " in s:
        a, b = s.split(" / ", 1)
        return {"zh": a.strip(), "en": b.strip()}
    return {"zh": s, "en": s}


def render_md(md_text):
    return markdown.markdown(
        md_text,
        extensions=["extra", "codehilite", "toc", "sane_lists", "smarty"],
        extension_configs={"codehilite": {"guess_lang": False}},
    )


def build():
    site = load_site()
    default_lang = site["site"].get("default_lang", "zh")

    # 1. 收集文章
    articles = []
    if CONTENT.exists():
        for p in CONTENT.rglob("*.md"):
            a = parse_article(p, site)
            if a["draft"]:
                continue
            # 校验分类合法
            if not any(c["slug"] == a["category"] for c in site["categories"]):
                die(f"{p}: 分类 '{a['category']}' 未在 site.yml 登记")
            articles.append(a)

    # 排序：order 升序，再 date 倒序
    articles.sort(key=lambda a: (a["order"], str(a["date"])), reverse=True)

    # 2. 准备输出
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir(parents=True)
    (DIST / "assets").mkdir()

    # 3. Jinja 环境（不含 sitemap，sitemap 在渲染时注入）
    env = Environment(
        loader=FileSystemLoader(str(TMPL)),
        autoescape=select_autoescape(["html", "xml"]),
        trim_blocks=True,
        lstrip_blocks=True,
    )
    env.globals["site"] = site["site"]
    env.globals["categories"] = site["categories"]
    env.globals["default_lang"] = default_lang

    base = site["site"]["repo"].split("/")[0] + ".github.io"  # yuyuguilab.github.io
    env.globals["base_host"] = base

    # ---- i18n 文案 ----
    I18N = {
        "zh": {
            "home": "首页", "categories": "分类", "archive": "归档",
            "skip": "跳到正文", "source": "查看源码",
            "read_more": "阅读全文", "no_articles": "本分类暂无文章。",
            "all_articles": "全部文章", "published": "发布于",
            "in_category": "分类", "back_to_cat": "返回分类目录",
            "lang_note_zh": "本文暂无英文版，以下显示中文原文。",
            "lang_note_en": "本文暂无中文版，以下显示英文原文。",
            "recent": "最新文章", "view_all": "查看全部 →",
            "browse_categories": "浏览分类",
        },
        "en": {
            "home": "Home", "categories": "Topics", "archive": "Archive",
            "skip": "Skip to content", "source": "View source",
            "read_more": "Read more", "no_articles": "No articles in this topic yet.",
            "all_articles": "All Articles", "published": "Published",
            "in_category": "Topic", "back_to_cat": "Back to topic",
            "lang_note_zh": "No English version yet. Showing Chinese original below.",
            "lang_note_en": "No Chinese version yet. Showing English original below.",
            "recent": "Recent", "view_all": "View all →",
            "browse_categories": "Browse topics",
        },
    }

    # ---- 模板内辅助：URL/文案 ----
    # current_page 记录“当前页在两种语言下的路径”，用于语言切换保持同页
    # 形如 {"zh": "/zh/company/xiaomi/", "en": "/en/company/xiaomi/"}
    page_paths = {"zh": "", "en": ""}

    def root_url():
        return "/"

    def repo_url():
        return f"https://github.com/{site['site']['repo']}"

    def now_year():
        return datetime.date.today().year

    def href(lang_code, seg):
        """站内链接：href('zh','company') -> /zh/company/"""
        return f"/{lang_code}/{seg}/" if seg else f"/{lang_code}/"

    def t(key):
        return I18N[page_paths["_lang"]][key]

    def cat_name(slug, lang_code):
        for c in site["categories"]:
            if c["slug"] == slug:
                return c["name"][lang_code]
        return slug

    def canonical(lang_code):
        return f"https://{base}/" + (page_paths[lang_code].lstrip("/"))

    def switch_url():
        other = "en" if page_paths["_lang"] == "zh" else "zh"
        # page_paths[other] 形如 "/en/company/xiaomi/"，已是完整目标路径
        return page_paths[other]

    env.globals.update(
        t=t, href=href, canonical=canonical, switch_url=switch_url,
        root_url=root_url, repo_url=repo_url, now_year=now_year, cat_name=cat_name,
    )
    # prefix 过滤器：在 user pages 根域名下，绝对路径以 / 开头即可
    env.filters["prefix"] = lambda s: s if s.startswith("/") else "/" + s

    def render(tmpl, ctx, out_path):
        # 设置当前页的双语路径，供辅助函数使用
        # 由 out_path 相对 dist 推断，如 dist/zh/company/xiaomi/index.html
        rel = out_path.relative_to(DIST)
        parts = rel.parts  # ('zh','company','xiaomi','index.html')
        rest = "/".join(parts[1:-1])  # 去掉语言段与 index.html，如 'company/xiaomi'
        # 两种语言的对称路径（去掉语言段后相同）
        for lc in ("zh", "en"):
            page_paths[lc] = "/" + lc + "/" + (rest + "/" if rest else "")
        page_paths["_lang"] = ctx.get("lang", default_lang)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(env.get_template(tmpl).render(**ctx), encoding="utf-8")

    # 4. 为每个语言生成页面
    for lang in ("zh", "en"):
        L = DIST / lang
        # 4a. 首页（语言内）= /zh/index.html / /en/index.html
        render("home.html", {"lang": lang, "articles": articles}, L / "index.html")

        # 4b. 文章页
        for a in articles:
            # 回退：目标语言缺失则用另一语言
            body_src = a["body"][lang]
            fallback = False
            if not body_src:
                other = "en" if lang == "zh" else "zh"
                body_src = a["body"][other]
                fallback = True
            html_body = render_md(body_src)
            ctx = {"lang": lang, "a": a, "content": html_body, "fallback": fallback}
            render("article.html", ctx, L / a["category"] / a["slug"] / "index.html")

        # 4c. 分类目录页（含空分类）
        for cat in site["categories"]:
            arts = [a for a in articles if a["category"] == cat["slug"]]
            ctx = {"lang": lang, "cat": cat, "arts": arts}
            render("category.html", ctx, L / cat["slug"] / "index.html")

        # 4d. 归档页（全部文章）
        render("archive.html", {"lang": lang, "articles": articles}, L / "archive" / "index.html")

    # 5. 根 /index.html —— 语言自适应跳转（首屏内联 JS + noscript meta）
    render("redirect.html", {"default_lang": default_lang}, DIST / "index.html")

    # 6. 复制静态资源
    src_assets = ROOT / "assets"
    if src_assets.exists():
        for f in src_assets.rglob("*"):
            if f.is_file():
                rel = f.relative_to(src_assets)
                dst = DIST / "assets" / rel
                dst.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(f, dst)

    # 7. robots / sitemap
    write_sitemap(site, articles, default_lang)

    print(f"✓ 构建完成：{len(articles)} 篇文章，2 种语言，输出到 dist/")
    return articles


def write_sitemap(site, articles, default_lang):
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    host = "https://" + site["site"]["repo"].split("/")[0] + ".github.io/"
    for lang in ("zh", "en"):
        lines.append(f"  <url><loc>{html.escape(host + lang + '/')}</loc></url>")
        for cat in site["categories"]:
            lines.append(f"  <url><loc>{html.escape(host + lang + '/' + cat['slug'] + '/')}</loc></url>")
        for a in articles:
            lines.append(f"  <url><loc>{html.escape(host + lang + '/' + a['category'] + '/' + a['slug'] + '/')}</loc></url>")
    lines.append("</urlset>")
    (DIST / "sitemap.xml").write_text("\n".join(lines), encoding="utf-8")


if __name__ == "__main__":
    build()
