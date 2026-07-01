# 余玉桂战略研究室 · Yu Yugui Strategy Lab

跨学科战略研究博客，基于 **Hexo + NexT (Gemini)** 主题，支持中英文双语自适应。

- 线上站点：<https://yuyuguilab.github.io/>
- 构建：Hexo 8 + NexT 8，GitHub Actions 自动部署

## 目录结构

```
├── _config.yml           # Hexo 站点主配置（中文站默认）
├── _config.next.yml      # NexT 主题配置（Gemini 布局 / 深色模式 / 搜索 / TOC）
├── _config.zh.yml        # 中文站覆盖：root=/zh/
├── _config.en.yml        # 英文站覆盖：root=/en/ + source-en/
├── source/_posts/        # 中文文章
├── source-en/_posts/     # 英文文章（与中文一一对应）
├── tools/build.js        # 双语构建脚本（生成 zh/en + 合并 + 语言自适应 + 切换按钮）
├── .github/workflows/    # GitHub Actions 部署
└── package.json
```

## 双语站点布局

| 路径 | 内容 |
|------|------|
| `/` | 语言自适应跳转（按浏览器语言 + localStorage 记忆） |
| `/zh/` | 中文站 |
| `/en/` | 英文站 |

每页右下角有悬浮语言切换按钮，在 `/zh/...` ↔ `/en/...` 同路径间切换。

## 写作

新建文章（中英各一份，保持文件名一致）：

```bash
# 中文
# source/_posts/<slug>.md
---
title: 文章标题
date: 2026-07-01
categories: [公司]   # 用中文分类名，由 _config.yml 的 category_map 映射成 URL
tags: [标签1, 标签2]
---

正文……

# 英文（source-en/_posts/<slug>.md，同样的 categories 用中文名以保证 URL 对称）
---
title: Article Title
date: 2026-07-01
categories: [公司]
tags: [tag1, tag2]
---

Body...
```

**注意**：英文文章的 `categories` 也写中文分类名（如 `[公司]`），这样中英文 URL 完全对称（`/zh/company/x/` ↔ `/en/company/x/`）。

分类体系（11 类）：公司 · 经济 · 政治 · 国际 · 国家 · 哲学 · 天文 · 地理 · 技术 · 个人 · 杂谈。

## 本地预览

```bash
npm install
node tools/build.js                    # 构建双语站点到 public/
python3 -m http.server -d public 8000  # 访问 http://localhost:8000
```

## 部署

推送到 `main` 分支即触发 GitHub Actions 自动构建部署。
