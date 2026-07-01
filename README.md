# 余玉桂战略研究室 · Yu Yugui Strategy Lab

**[English](README.en.md)** · 简体中文

跨学科战略研究博客，基于 **Hexo + academic 主题**（极简学术风格），支持中英文双语自适应。

- 线上站点：<https://yuyuguilab.github.io/>
- 构建：Hexo 8 + 自写 academic 主题，GitHub Actions 自动部署

## 目录结构

```
├── _config.yml           # Hexo 站点主配置（中文站，根路径 /）
├── _config.en.yml        # 英文站覆盖：root=/en/ + source-en/
├── themes/academic/      # academic 主题（极简学术风格）
│   ├── layout/*.njk      # Nunjucks 模板（首页/文章/分类/归档）
│   ├── source/css        # 样式（浅色卡片 + 毛玻璃 + 深色模式）
│   └── languages/        # 中英文案
├── source/_posts/        # 中文文章
├── source-en/_posts/     # 英文文章（与中文一一对应）
├── tools/build.js        # 双语构建脚本（生成中文根站 + 英文 /en/ + 语言切换注入）
└── .github/workflows/    # GitHub Actions 部署
```

## 风格

极简学术主页：浅色径向渐变背景、半透明毛玻璃卡片、大圆角、胶囊链接、系统字体紧凑字距。顶部导航内置 light/dark 主题切换与中英文切换。

## 双语站点布局

| 路径 | 内容 |
|------|------|
| `/` | 中文站（默认主站，根路径直接是完整首页，SEO 友好） |
| `/en/` | 英文站 |

根路径为完整中文首页（无过渡跳转页）；英文浏览器访问时通过 hreflang + 极小内联脚本静默引导至 `/en/`，不阻塞渲染。每页顶部导航有语言切换按钮，在 `/...` ↔ `/en/...` 同路径间切换。

## 写作

新建文章（中英各一份，保持文件名一致）：

```bash
# 中文
# source/_posts/<slug>.md
---
title: 文章标题
date: 2026-07-01
categories: [商业]   # 用中文分类名，由 _config.yml 的 category_map 映射成 URL
tags: [标签1, 标签2]
---

正文……

# 英文（source-en/_posts/<slug>.md，同样的 categories 用中文名以保证 URL 对称）
---
title: Article Title
date: 2026-07-01
categories: [商业]
tags: [tag1, tag2]
---

Body...
```

**注意**：英文文章的 `categories` 也写中文分类名（如 `[商业]`），这样中英文 URL 完全对称（`/business/x/` ↔ `/en/business/x/`）。

分类体系（11 类）：商业 · 经济 · 政治 · 国际 · 国家 · 哲学 · 天文 · 地理 · 技术 · 个人 · 杂谈。

## 本地预览

```bash
npm install
node tools/build.js                    # 构建双语站点到 public/
python3 -m http.server -d public 8000  # 访问 http://localhost:8000
```

## 部署

推送到 `main` 分支即触发 GitHub Actions 自动构建部署。
