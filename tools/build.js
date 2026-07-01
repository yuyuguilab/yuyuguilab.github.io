/**
 * 余玉桂战略研究室 —— 双语站点构建合并脚本
 *
 * 布局：
 *   /        → 语言自适应跳转页（navigator.languages + localStorage）
 *   /zh/     → 中文站（Hexo 中文站，root=/zh/）
 *   /en/     → 英文站（Hexo 英文站，root=/en/）
 *
 * 流程：
 *   1. 中文站 generate → .public-zh/  （_config.zh.yml 覆盖 root+source_dir+public_dir）
 *   2. 英文站 generate → .public-en/  （_config.en.yml + public_dir 覆盖）
 *   3. 清空 public/，移入 .public-zh→public/zh，.public-en→public/en
 *   4. 写入根 index.html（自适应跳转）
 *   5. 注入语言切换按钮（中文页→/en同路径，英文页→/zh同路径）
 */
const { execSync } = require("child_process");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const ZH_TMP = path.join(ROOT, ".public-zh");
const EN_TMP = path.join(ROOT, ".public-en");

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
 * 主题切换/语言按钮的 UI 与交互已由 academic 主题（_partials/nav.njk + main.js）提供，
 * 这里只需把"当前页在另一语言下的对应路径"写入 body 的 data 属性，供主题 JS 读取。
 */
async function injectLangTarget(file) {
  let html;
  try {
    html = await fsp.readFile(file, "utf8");
  } catch {
    return;
  }
  const isEn = file.includes(path.join("public", "en") + path.sep);
  const langDir = isEn ? path.join(PUBLIC, "en") : path.join(PUBLIC, "zh");
  let rel = path.relative(langDir, path.dirname(file)).split(path.sep).join("/");
  const pagePath = "/" + (rel ? rel + "/" : "");

  // 中文页 → /en + pagePath；英文页 → /zh + pagePath
  const langTarget = isEn ? "/zh" + pagePath : "/en" + pagePath;
  const langCode = isEn ? "zh" : "en";

  if (html.includes("<body>")) {
    html = html.replace(
      "<body>",
      `<body data-lang-target="${langTarget}" data-lang-code="${langCode}">`
    );
    await fsp.writeFile(file, html, "utf8");
  }
}
async function walkHtml(dir, fn) {
  if (!fs.existsSync(dir)) return;
  for (const e of await fsp.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walkHtml(full, fn);
    else if (e.name.endsWith(".html")) await fn(full);
  }
}

function writeRootIndex() {
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>余玉桂战略研究室 · Yu Yugui Strategy Lab</title>
<noscript><meta http-equiv="refresh" content="0; url=/zh/"></noscript>
<style>
*{margin:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;
  background:#f5f5f5;color:#333;transition:background .3s,color .3s}
@media(prefers-color-scheme:dark){body{background:#0d1117;color:#c9d1d9}}
.box{text-align:center;padding:2rem}
.glyph{font-size:1.4rem;font-weight:700;margin-bottom:.6rem}
.glyph a{color:inherit;text-decoration:none;padding:.2rem .4rem}
.glyph .sep{opacity:.3;margin:0 .4rem}
.sub{font-size:.88rem;opacity:.55;margin-top:1rem}
</style>
</head>
<body>
<div class="box">
  <div class="glyph">
    <a href="/zh/">余玉桂战略研究室</a><span class="sep">·</span><a href="/en/">Yu Yugui Strategy Lab</a>
  </div>
  <div class="sub" id="hint">跳转中…</div>
</div>
<script>
(function(){
  var hint=document.getElementById('hint');
  var saved=null;try{saved=localStorage.getItem('lang');}catch(e){}
  var lang=saved;
  if(!lang){
    var nav=(navigator.languages&&navigator.languages[0])||navigator.language||'';
    lang=/^zh/i.test(nav)?'zh':(/^en/i.test(nav)?'en':'zh');
  }
  if(location.pathname.indexOf('/zh/')===0||location.pathname.indexOf('/en/')===0)return;
  if(lang==='en'){location.replace('/en/');return;}
  hint.textContent='进入中文站 →';
  setTimeout(function(){location.replace('/zh/');},300);
})();
</script>
</body>
</html>`;
  return fsp.writeFile(path.join(PUBLIC, "index.html"), html, "utf8");
}

async function main() {
  const zhPublic = path.join(ROOT, "_config.zh.public.yml");
  const enPublic = path.join(ROOT, "_config.en.public.yml");
  fs.writeFileSync(zhPublic, "public_dir: .public-zh\n");
  fs.writeFileSync(enPublic, "public_dir: .public-en\n");

  try {
    console.log("=== 1. 清理 ===");
    run("npx hexo clean");
    [ZH_TMP, EN_TMP, PUBLIC].forEach((d) => {
      if (fs.existsSync(d)) fs.rmSync(d, { recursive: true, force: true });
    });

    console.log("\n=== 2. 生成中文站 → .public-zh/ ===");
    run("npx hexo generate --config _config.yml,_config.zh.yml,_config.zh.public.yml");

    console.log("\n=== 3. 生成英文站 → .public-en/ ===");
    run("npx hexo generate --config _config.yml,_config.en.yml,_config.en.public.yml");

    console.log("\n=== 4. 组装 public/ ===");
    fs.mkdirSync(PUBLIC, { recursive: true });
    moveContents(ZH_TMP, path.join(PUBLIC, "zh"));
    moveContents(EN_TMP, path.join(PUBLIC, "en"));
    fs.rmSync(ZH_TMP, { recursive: true, force: true });
    fs.rmSync(EN_TMP, { recursive: true, force: true });

    console.log("\n=== 5. 语言自适应根 index.html ===");
    await writeRootIndex();

    console.log("\n=== 6. 注入语言切换目标 ===");
    let n = 0;
    await walkHtml(PUBLIC, async (f) => {
      await injectLangTarget(f).catch(() => {});
      n++;
    });
    console.log(`已处理 ${n} 个 HTML 文件`);

    console.log("\n✓ 双语站点构建完成 → public/");
    console.log("  /      → 语言自适应");
    console.log("  /zh/   → 中文站");
    console.log("  /en/   → 英文站");
  } finally {
    [zhPublic, enPublic].forEach((f) => {
      try { fs.unlinkSync(f); } catch {}
    });
    [ZH_TMP, EN_TMP].forEach((d) => {
      if (fs.existsSync(d)) fs.rmSync(d, { recursive: true, force: true });
    });
  }
}

main().catch((e) => {
  console.error("\n✗ 构建失败:", e);
  process.exit(1);
});
