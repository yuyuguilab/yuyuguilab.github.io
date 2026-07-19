# AGENTS.md — 余玉桂战略研究室博客 · 协作规则

本文件为 AI 协作者（如 ZCode）在本仓库工作时的规则指引。发布文章、修改站点时**必须遵循**。

## 项目概览

- **站点**：https://yuyuguilab.github.io/（GitHub Pages，自动部署）
- **技术栈**：Hexo 8 + 自写 `academic` 主题（极简学术风格）+ 自写 `tools/build.js` 双语构建脚本
- **语言**：默认英文站（根路径 `/`）+ 中文站（`/zh/`），中英文 URL 完全对称
- **仓库**：`yuyuguilab/yuyuguilab.github.io`（gh 已登录，账号 `yuyuguilab`）

## 目录结构（关键路径）

```
_config.yml              # 站点主配置（英文默认，root=/, source_dir=source-en）
_config.zh.yml           # 中文站覆盖（root=/zh/, source_dir=source）
source-en/_posts/        # 英文文章（默认站，根路径）
source-en/categories/    # 英文分类索引页
source-en/tags/          # 英文标签索引页
source/_posts/           # 中文文章（/zh/）
source/categories/       # 中文分类索引页
source/tags/             # 中文标签索引页
themes/academic/         # 主题（layout 模板 / source 资源 / scripts helper / languages 文案）
tools/build.js           # 双语构建脚本（核心，勿随意改动）
.github/workflows/       # GitHub Actions 自动部署
```

## 发布文章的标准流程（最重要）

### 第 1 步：写中文版 → `source/_posts/<slug>.md`
### 第 2 步：翻译英文版 → `source-en/_posts/<slug>.md`（**文件名必须与中文一致**）
### 第 3 步：构建验证 → `node tools/build.js`
### 第 4 步：验证通过后提交并推送 → 自动触发部署
### 第 5 步：等待 `gh run list` 显示 success，再用 curl/python 验证线上

**两份文章的 `slug`（文件名）必须完全相同**，这是中英文 URL 对称的前提：
- 中文 `/zh/technology/agi/`  ↔  英文 `/technology/agi/`

## 文章 front-matter 规则（严格）

```yaml
---
title: '文章标题'                    # 含特殊字符(冒号/引号/破折号)时必须用引号包裹
date: 2026-07-19 10:00:00            # YYYY-MM-DD HH:MM:SS
categories: [技术]                   # 必须用中文名！见下方"分类规则"
tags: [AI, 大模型, 护城河]           # 中英文章用各自语言的标签
description: 一句话摘要              # 含冒号/引号时同样要加引号
---
```

### YAML 转义陷阱（踩过坑，务必注意）
- **title/description 含 `:` `"` `'` 时必须用引号包裹整个值**
- 用**双引号**包裹最安全；若值内部含双引号，改用单引号包裹并去掉内部双引号，或把内部双引号换成中文引号「」
- 错误示例：`title: 关于"AI+"的思考` → 解析失败
- 正确示例：`title: '关于"AI+"的思考'` 或 `title: "On AI+ Strategy"`
- **构建后必须用 `python3 -c "import yaml; yaml.safe_load(...)"` 预检 front-matter 能否解析**

### 分类规则（关键）
- `categories` **必须用中文分类名**（如 `[技术]`），不能用英文 `[Technology]`
- 原因：`_config.yml` 的 `category_map` 把中文映射成 URL slug（`技术→technology`），中英文都用中文名才能保证 URL 对称
- **英文文章的 categories 也要写中文**（如 `categories: [技术]`），分类显示名由主题 `cat_display` helper 自动转英文

可选分类（11 类，登记在 `_config.yml` category_map + `themes/academic/_config.yml` categories）：

| 中文 | URL slug | 英文显示名 |
|------|----------|-----------|
| 商业 | business | Business |
| 经济 | economy | Economy |
| 政治 | politics | Politics |
| 国际 | international | International |
| 国家 | nation | Nations |
| 哲学 | philosophy | Philosophy |
| 天文 | astronomy | Astronomy |
| 地理 | geography | Geography |
| 技术 | technology | Technology |
| 个人 | personal | Personal |
| 杂谈 | misc | Miscellany |

**新增分类**：需同时在 `_config.yml` 的 `category_map` 和 `themes/academic/_config.yml` 的 `categories` 添加条目（slug + zh/en 名）。

## 文章正文规则

- 正文是标准 Markdown（标题 `##`/`###`、列表、表格、引用 `>`、加粗 `**` 等都支持）
- **不要在正文里写一级标题 `# `**（标题由 front-matter title 提供，正文从第一个 `##` 或段落开始）
- 从 `documents/` 或其他来源复制文章时，**去掉源文件的一级标题行**，改用 front-matter

## 翻译规则（中文 → 英文）

- 用 Agent 工具委托翻译，prompt 中**明确列出专有名词的映射**（人名、公司名、产品名、技术术语保留原文或指定译法）
- 保留所有 Markdown 格式、表格结构、列表层级
- 数值/单位规范：亿 = 100 million（7338 亿港元 = HK$733.8 billion）、元 → RMB
- 保留原文的语气和修辞力度（学术/激进/克制），不要统一软化

## 构建与部署

### 本地构建（推送前必做）
```bash
node tools/build.js                    # 生成英文站→public/，中文站→public/zh/，合并 sitemap/robots
python3 -m http.server -d public 8090  # 本地预览 http://localhost:8090
```

`build.js` 流程：英文站 generate → `public/`；中文站 generate → `public/zh/`；生成 sitemap.xml + robots.txt；注入语言切换目标 URL。

### 部署（推送触发）
```bash
git add -A
git -c user.name="余玉桂战略研究室" -c user.email="yuyuguilab@users.noreply.github.com" commit -m "发布《标题》"
git push origin main                   # 触发 GitHub Actions 自动部署
```

- **commit 身份**：`user.name="余玉桂战略研究室"`、`user.email="yuyuguilab@users.noreply.github.com"`（见所有历史 commit）
- 推送后用 `gh run list --limit 1 --json status,conclusion` 监控，success 后验证线上
- **推送超时**（国内网络波动常见）：配置 `git config --local http.proxy http://127.0.0.1:10808` 后重试

### 临时文件（勿提交）
`.gitignore` 已忽略：`public/`、`node_modules/`、`db.json`、`_multiconfig.yml`、`.public-zh/`、`_config.*.public.yml`。提交前 `git status` 确认无泄漏。

## 验证清单（每次发布必跑）

```bash
# 1. YAML 预检
python3 -c "import yaml; yaml.safe_load(open('source/_posts/X.md').read().split('---')[1])"

# 2. 路由对称（中英都 200）
curl -s -o /dev/null -w '%{http_code}' http://localhost:8090/technology/X/
curl -s -o /dev/null -w '%{http_code}' http://localhost:8090/zh/technology/X/

# 3. 英文站无中文泄漏（分类名应显示 Technology 不是 技术）
curl -s http://localhost:8090/technology/X/ | grep -o 'categories/technology/">[^<]*'

# 4. 正文渲染（含 post-body、表格、分享按钮、推荐栏）
```

## 主题模板注意事项（修改主题时）

### Nunjucks 遍历 Hexo Query 对象（踩过坑）
Hexo 的 `page.categories`、`page.tags`、`page.posts` 是 Query 对象，**Nunjucks 的 `{% for %}` 直接遍历取不到字段**（会得到 undefined/空）。必须先 `.toArray()`：
```njk
{% set cats = page.categories.toArray() %}   {# 正确 #}
{% for c in cats %}{{ c.name }}{% endfor %}
{% for c in page.categories %}{{ c.name }}{% endfor %}   {# 错误：c.name 为空 #}
```

### 主题 scripts 目录（helper 注册）
`themes/academic/scripts/` 下的 JS 会被 Hexo 自动加载，用 `hexo.extend.helper.register()` 注册模板可用的函数。现有 helper：
- `cat_count(slug)` — 分类文章数
- `cat_display(key)` — 分类名按当前语言显示（slug/中文名 → en/zh 名）
- `related_posts(post, limit)` — 相关文章推荐（标签+分类评分）

### 语言文件
`themes/academic/languages/zh-CN.yml` 和 `en.yml` —— 新增界面文案时两份都要加，key 对齐。

### `config.lang` 决定语言
模板里用 `config.lang`（值为 `en` 或 `zh`）判断当前语言，**不要用 `page.lang`**（不存在）。

## 已知功能清单（修改前了解现状）

- ✅ 双语自适应（根路径英文默认，中文浏览器引导到 /zh/）
- ✅ 顶部导航语言切换 + light/dark/auto 主题切换
- ✅ 文章分享栏（10 平台：原生分享/复制/X/Facebook/LinkedIn/Telegram/WhatsApp/Reddit/微博/邮件）
- ✅ 不蒜子访问统计（页脚站点 PV/UV + 文章页阅读量）
- ✅ 文章底部"继续阅读"推荐栏（标签+分类相关性）
- ✅ sitemap.xml（含 hreflang 中英配对）+ robots.txt
- ✅ Google Search Console 验证 meta + SEO
- ✅ 站点 logo（favicon + 首页 hero 品牌标识）

## 常见错误与规避

| 错误 | 规避 |
|------|------|
| front-matter YAML 解析失败 | 含特殊字符的 title/description 用引号包裹；构建前预检 |
| 英文站显示中文分类名"技术" | categories 必须用中文名，显示由 cat_display 转换 |
| 文章页面包屑/标签为空 | 模板遍历 categories/tags 前先 `.toArray()` |
| 中英文 URL 不对称 | 两份文章文件名一致，categories 都用中文名 |
| 推送超时 | 配置 git proxy（`http://127.0.0.1:10808`）后重试 |
| 把构建产物提交进仓库 | `.gitignore` 已忽略 public/ 等，commit 前 `git status` 检查 |

## 发布后（可选）

- 想加速 Google 收录：在 Google Search Console「网址检查」提交新 URL「请求编入索引」
- 用 `site:yuyuguilab.github.io` 查收录进展
