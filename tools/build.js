/**
 * 余玉桂战略研究室 —— 双语站点构建脚本
 *
 * 布局（默认英文，SEO 友好，无过渡页）：
 *   /        → 英文站（根路径，默认主站，爬虫直接抓到实质内容）
 *   /zh/     → 中文站（Hexo 中文站，root=/zh/）
 *
 * 中文浏览器引导：在根页面注入极小的内联脚本，仅在 navigator.language
 * 为中文且用户未手动选择过语言时，静默跳转 /zh/。首屏内容是完整英文首页，
 * 不阻塞渲染、不显示"跳转中"过渡。
 *
 * 流程：
 *   1. 英文站 generate → public/        （_config.yml 默认 root=/）
 *   2. 中文站 generate → .public-zh/    （_config.zh.yml 覆盖 root=/zh/）
 *   3. 移入 .public-zh → public/zh/
 *   4. 给根 index 注入中文浏览器引导（hreflang + 静默 JS）
 *   5. 注入语言切换目标（英文页↔/zh同路径）
 */
const { execSync } = require("child_process");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const ZH_TMP = path.join(ROOT, ".public-zh");

function run(cmd) {
  console.log(`\n▶ ${cmd}`);
  execSync(cmd, { cwd: ROOT, stdio: "inherit" });
}

/** 移动目录内容到目标目录 */
function moveContents(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    fs.renameSync(path.join(src, name), path.join(dst, name));
  }
}

/**
 * 注入语言切换目标 URL 到 <body>
 * 英文页(/xxx) → /zh/xxx；中文页(/zh/xxx) → /xxx
 */
async function injectLangTarget(file) {
  let html;
  try {
    html = await fsp.readFile(file, "utf8");
  } catch {
    return;
  }

  const zhDir = path.join(PUBLIC, "zh");
  const isZh = file.startsWith(zhDir + path.sep);

  let pagePath;
  if (isZh) {
    // 中文页：相对 public/zh 的路径，目标为根路径同页
    let rel = path.relative(zhDir, path.dirname(file)).split(path.sep).join("/");
    pagePath = "/" + (rel ? rel + "/" : "");
  } else {
    // 英文页：相对 public 的路径，目标为 /zh + 同页
    let rel = path.relative(PUBLIC, path.dirname(file)).split(path.sep).join("/");
    pagePath = "/" + (rel ? rel + "/" : "");
  }

  const langTarget = isZh ? pagePath : "/zh" + pagePath;
  const langCode = isZh ? "en" : "zh";

  if (html.includes("<body>")) {
    html = html.replace(
      "<body>",
      `<body data-lang-target="${langTarget}" data-lang-code="${langCode}">`
    );
    await fsp.writeFile(file, html, "utf8");
  }
}

/**
 * 给根路径英文首页注入：
 * 1. hreflang link 标签（SEO：声明 /zh/ 为中文版）
 * 2. 极小内联脚本：中文浏览器且未选过语言时静默跳 /zh/（不阻塞渲染）
 */
async function enhanceRootIndex() {
  const rootIndex = path.join(PUBLIC, "index.html");
  if (!fs.existsSync(rootIndex)) return;
  let html = await fsp.readFile(rootIndex, "utf8");

  if (html.includes("data-root-enhanced")) return;

  const hreflang = `
  <link rel="alternate" hreflang="en" href="https://yuyuguilab.github.io/">
  <link rel="alternate" hreflang="zh" href="https://yuyuguilab.github.io/zh/">
  <link rel="alternate" hreflang="x-default" href="https://yuyuguilab.github.io/">`;

  const guide = `
  <script data-root-enhanced>
  (function(){
    try{
      if(localStorage.getItem('lang'))return;
      var nav=(navigator.languages&&navigator.languages[0])||navigator.language||'';
      if(/^zh/i.test(nav)){location.replace('/zh/');}
    }catch(e){}
  })();
  </script>`;

  if (html.includes("</head>")) {
    html = html.replace("</head>", `${hreflang}${guide}\n</head>`);
  }
  await fsp.writeFile(rootIndex, html, "utf8");
}

async function walkHtml(dir, fn) {
  if (!fs.existsSync(dir)) return;
  for (const e of await fsp.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walkHtml(full, fn);
    else if (e.name.endsWith(".html")) await fn(full);
  }
}

async function main() {
  const zhPublic = path.join(ROOT, "_config.zh.public.yml");
  fs.writeFileSync(zhPublic, "public_dir: .public-zh\n");

  try {
    console.log("=== 1. 清理 ===");
    run("npx hexo clean");
    [ZH_TMP, PUBLIC].forEach((d) => {
      if (fs.existsSync(d)) fs.rmSync(d, { recursive: true, force: true });
    });

    console.log("\n=== 2. 生成英文站 → public/ （根路径，默认主站）===");
    run("npx hexo generate");

    console.log("\n=== 3. 生成中文站 → .public-zh/ ===");
    run("npx hexo generate --config _config.yml,_config.zh.yml,_config.zh.public.yml");

    console.log("\n=== 4. 移入中文站 → public/zh/ ===");
    moveContents(ZH_TMP, path.join(PUBLIC, "zh"));
    fs.rmSync(ZH_TMP, { recursive: true, force: true });

    console.log("\n=== 5. 增强根首页（hreflang + 中文浏览器引导）===");
    await enhanceRootIndex();

    console.log("\n=== 6. 注入语言切换目标 ===");
    let n = 0;
    await walkHtml(PUBLIC, async (f) => {
      await injectLangTarget(f).catch(() => {});
      n++;
    });
    console.log(`已处理 ${n} 个 HTML 文件`);

    console.log("\n✓ 双语站点构建完成 → public/");
    console.log("  /      → 英文站（默认主站，SEO 友好）");
    console.log("  /zh/   → 中文站");
  } finally {
    try { fs.unlinkSync(zhPublic); } catch {}
    if (fs.existsSync(ZH_TMP)) fs.rmSync(ZH_TMP, { recursive: true, force: true });
  }
}

main().catch((e) => {
  console.error("\n✗ 构建失败:", e);
  process.exit(1);
});
