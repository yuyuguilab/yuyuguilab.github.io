# 余玉桂战略研究室 · Yu Yugui Strategy Lab

跨学科战略研究博客，托管于 GitHub Pages，支持中英文双语自适应。

- 站点：<https://yuyuguilab.github.io/>
- 构建方式：Python 静态生成（`build.py`）+ GitHub Actions 自动部署

## 本地预览

```bash
pip install -r requirements.txt
python build.py          # 输出到 dist/
python -m http.server -d dist 8000   # 访问 http://localhost:8000
```

## 写作

阅读 [`AUTHORING.md`](AUTHORING.md)。要点：

- 新建文章：`content/<分类>/<slug>.md`
- 双语：正文用 `<!-- lang: en -->` 分隔中/英
- 新建分类：在 `site.yml` 的 `categories` 增加条目

## 目录结构

```
content/      文章（按分类组织）
templates/    Jinja2 模板
assets/       静态资源（css/js）
site.yml      站点与分类配置（单一注册表）
build.py      构建脚本
.github/      GitHub Actions 部署工作流
```
