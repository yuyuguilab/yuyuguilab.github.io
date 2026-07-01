# Yu Yugui Strategy Lab · 余玉桂战略研究室

English · **[简体中文](README.md)**

A cross-disciplinary strategy research blog, built with **Hexo + the academic theme** (minimal academic style) and supporting bilingual (Chinese/English) auto-switching.

- Live site: <https://yuyuguilab.github.io/>
- Build: Hexo 8 + a custom `academic` theme, auto-deployed via GitHub Actions

## Directory Structure

```
├── _config.yml           # Main Hexo config (defaults to the Chinese site)
├── _config.zh.yml        # Chinese site override: root=/zh/
├── _config.en.yml        # English site override: root=/en/ + source-en/
├── themes/academic/      # academic theme (minimal academic style)
│   ├── layout/*.njk      # Nunjucks templates (home/post/category/archive)
│   ├── source/css        # Styles (light cards + frosted glass + dark mode)
│   └── languages/        # Chinese/English strings
├── source/_posts/        # Chinese posts
├── source-en/_posts/     # English posts (one-to-one with Chinese)
├── tools/build.js        # Bilingual build script (generate zh/en + merge + lang switch)
└── .github/workflows/    # GitHub Actions deployment
```

## Style

Minimal academic homepage: light radial-gradient background, semi-transparent frosted-glass cards, large rounded corners, pill links, system fonts with tight letter-spacing. The top navigation includes a light/dark theme toggle and a Chinese/English language switch.

## Bilingual Site Layout

| Path | Content |
|------|---------|
| `/` | Language-adaptive redirect (by browser language + localStorage memory) |
| `/zh/` | Chinese site |
| `/en/` | English site |

Each page's top navigation has a language switch that toggles between `/zh/...` and `/en/...` at the same path.

## Writing

Create a new post (one Chinese, one English, same filename):

```bash
# Chinese
# source/_posts/<slug>.md
---
title: 文章标题
date: 2026-07-01
categories: [商业]   # Use the Chinese category name; _config.yml's category_map maps it to the URL
tags: [标签1, 标签2]
---

Body in Chinese…

# English (source-en/_posts/<slug>.md, same categories in Chinese for URL symmetry)
---
title: Article Title
date: 2026-07-01
categories: [商业]
tags: [tag1, tag2]
---

Body in English...
```

**Note**: English posts also use the Chinese category name (e.g. `[商业]`) so that the Chinese and English URLs are fully symmetric (`/zh/business/x/` ↔ `/en/business/x/`).

Category system (11 topics): 商业(Business) · 经济(Economy) · 政治(Politics) · 国际(International) · 国家(Nations) · 哲学(Philosophy) · 天文(Astronomy) · 地理(Geography) · 技术(Technology) · 个人(Personal) · 杂谈(Miscellany).

## Local Preview

```bash
npm install
node tools/build.js                    # Build the bilingual site into public/
python3 -m http.server -d public 8000  # Open http://localhost:8000
```

## Deployment

Pushing to the `main` branch triggers an automatic GitHub Actions build and deploy.
