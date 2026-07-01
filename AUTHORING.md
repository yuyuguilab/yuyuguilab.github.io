# 写作规范 · Authoring Guide

每篇文章是一个 Markdown 文件，路径决定分类与 URL：

```
content/<分类>/<文件名>.md   →   /{zh|en}/<分类>/<文件名>/
```

## 文件格式

文件由 **YAML Front-matter** + **中英双语正文** 组成。两套语言用分隔符隔开：

```markdown
---
title: 文章标题 / Article Title
date: 2026-07-01
description: 摘要（可选）；中英任写其一即可，构建时回退。
order: 1            # 可选，同类内排序，数字小的在前；缺省按日期倒序
draft: false        # 可选，true 则不发布
---

中文正文从这里开始……

可任意使用 Markdown：标题、列表、**加粗**、`代码`、表格、引用等。

<!-- lang: en -->

English body starts here……

Any Markdown is supported.
```

### 分隔符规则（核心）

- `<!-- lang: en -->` 这一行把文件切成两段：**它之前是中文，之后是英文**。
- 只写中文也行：分隔符和英文段都可省略，构建时英文页会回退显示中文内容并提示。
- 只写英文：在文件最顶部加一行 `<!-- lang: en -->` 即可（此时无中文段）。

### Front-matter 字段

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | 是 | 双语标题，建议用 ` / ` 分隔中英 |
| `date` | 是 | `YYYY-MM-DD`，用于排序与显示 |
| `description` | 否 | 摘要，用于列表页与 SEO |
| `order` | 否 | 同类内排序权重，小者靠前；缺省按日期倒序 |
| `draft` | 否 | `true` 时不发布 |

### 新建分类

在 `site.yml` 的 `categories` 下加一条 `{ slug, name: {zh, en} }`，再在 `content/` 下建同名目录放文章即可。空分类也会自动在站点显示目录页。
