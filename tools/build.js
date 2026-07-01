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

/** 注入语言切换 + 主题切换工具栏 */
async function injectSwitch(file) {
  let html;
  try {
    html = await fsp.readFile(file, "utf8");
  } catch {
    return;
  }
  if (html.includes("data-floatbar")) return;

  const isEn = file.includes(path.join("public", "en") + path.sep);
  const langDir = isEn ? path.join(PUBLIC, "en") : path.join(PUBLIC, "zh");
  let rel = path.relative(langDir, path.dirname(file)).split(path.sep).join("/");
  const pagePath = "/" + (rel ? rel + "/" : "");

  // 中文页 → /en + pagePath；英文页 → /zh + pagePath
  const langTarget = isEn ? "/zh" + pagePath : "/en" + pagePath;
  const langLabel = isEn ? "中文" : "English";
  const langCode = isEn ? "zh" : "en";
  const langTitle = isEn ? "切换到中文" : "Switch to English";
  // 主题切换文案随站点语言
  const tLight = isEn ? "Light" : "浅色";
  const tDark = isEn ? "Dark" : "深色";
  const tAuto = isEn ? "Auto" : "跟随系统";
  const tToggle = isEn ? "Toggle theme" : "切换主题";

  const inject = `
<style>
/* —— 浮动工具栏：语言 + 主题 —— */
#float-bar{position:fixed;right:18px;bottom:88px;z-index:9999;display:flex;flex-direction:column;gap:.5rem;align-items:flex-end}
.fb-btn{display:inline-flex;align-items:center;gap:.4em;padding:.55rem .95rem;border-radius:999px;
  cursor:pointer;font-size:.82rem;font-weight:500;border:1px solid var(--fb-border,#d0d7de);
  background:var(--fb-bg,#fff);color:var(--fb-fg,#0969da);box-shadow:0 2px 12px rgba(0,0,0,.12);
  transition:transform .15s,box-shadow .15s;text-decoration:none;line-height:1;font-family:inherit}
.fb-btn:hover{transform:translateY(-1px);box-shadow:0 4px 18px rgba(0,0,0,.18)}
.fb-btn svg{width:15px;height:15px;flex-shrink:0}
/* 主题菜单弹出 */
#fb-theme-wrap{position:relative}
#fb-theme-menu{position:absolute;right:0;bottom:calc(100% + .4rem);display:none;flex-direction:column;
  gap:.15rem;padding:.4rem;border-radius:10px;background:var(--fb-bg,#fff);border:1px solid var(--fb-border,#d0d7de);
  box-shadow:0 6px 20px rgba(0,0,0,.18);min-width:7rem}
#fb-theme-wrap.open #fb-theme-menu{display:flex}
#fb-theme-menu button{border:0;background:transparent;color:var(--fb-fg2,#555);padding:.4rem .6rem;
  border-radius:6px;cursor:pointer;font-size:.82rem;text-align:left;display:flex;align-items:center;gap:.4rem;font-family:inherit}
#fb-theme-menu button:hover{background:var(--fb-hover,#eaeef2)}
#fb-theme-menu button.active{color:#0969da;font-weight:600;background:var(--fb-hover,#eaeef2)}
#fb-theme-menu button svg{width:14px;height:14px}
/* 深色主题下按钮自身配色（主题正文色由 academic 主题 main.css 管理） */
html[data-theme="dark"]{--fb-bg:#161b22;--fb-fg:#58a6ff;--fb-fg2:#c9d1d9;--fb-border:#30363d;--fb-hover:#21262d}
@media(prefers-color-scheme:dark){html:not([data-theme="light"]){--fb-bg:#161b22;--fb-fg:#58a6ff;--fb-fg2:#c9d1d9;--fb-border:#30363d;--fb-hover:#21262d}}
</style>
<script>
(function(){
  // ① 提前设定 data-theme，避免页面加载时主题闪烁
  var saved=localStorage.getItem('theme')||'auto';
  function apply(t){
    if(t==='auto'){
      document.documentElement.removeAttribute('data-theme');
    }else{
      document.documentElement.setAttribute('data-theme',t);
    }
  }
  // 注：此 inline 脚本运行时 DOM 已解析，仅用于后续交互；防闪烁脚本已放 <head>
  window.__applyTheme=apply;
})();
</script>
<div id="float-bar">
  <a class="fb-btn" id="lang-switch" href="${langTarget}" data-lang-switch="${langCode}" title="${langTitle}">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
    ${langLabel}
  </a>
  <div id="fb-theme-wrap">
    <button class="fb-btn" id="fb-theme-btn" title="${tToggle}" aria-haspopup="true" aria-expanded="false">
      <svg id="fb-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
      <svg id="fb-icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>
      <span id="fb-theme-label">${tAuto}</span>
    </button>
    <div id="fb-theme-menu" role="menu">
      <button data-theme-set="light" role="menuitem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>${tLight}</button>
      <button data-theme-set="dark" role="menuitem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>${tDark}</button>
      <button data-theme-set="auto" role="menuitem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 6v12M11 6v12"/></svg>${tAuto}</button>
    </div>
  </div>
</div>
<script>
(function(){
  // ② 语言切换记忆
  var lb=document.getElementById('lang-switch');
  if(lb)lb.addEventListener('click',function(){try{localStorage.setItem('lang',lb.getAttribute('data-lang-switch'));}catch(_){}});

  // ③ 主题切换交互
  var saved=localStorage.getItem('theme')||'auto';
  var wrap=document.getElementById('fb-theme-wrap');
  var btn=document.getElementById('fb-theme-btn');
  var menu=document.getElementById('fb-theme-menu');
  var label=document.getElementById('fb-theme-label');
  var sun=document.getElementById('fb-icon-sun');
  var moon=document.getElementById('fb-icon-moon');
  var langs={light:'${tLight}',dark:'${tDark}',auto:'${tAuto}'};
  var isDark=saved==='dark'||(saved==='auto'&&matchMedia('(prefers-color-scheme:dark)').matches);
  function syncIcon(){if(sun&&moon){sun.style.display=isDark?'none':'inline';moon.style.display=isDark?'inline':'none';}}
  syncIcon();
  function setActive(t){menu.querySelectorAll('[data-theme-set]').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-theme-set')===t);});}
  setActive(saved);
  btn.addEventListener('click',function(e){e.stopPropagation();var o=wrap.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});
  document.addEventListener('click',function(){wrap.classList.remove('open');btn.setAttribute('aria-expanded','false');});
  menu.addEventListener('click',function(e){var b=e.target.closest('[data-theme-set]');if(!b)return;var t=b.getAttribute('data-theme-set');try{localStorage.setItem('theme',t);}catch(_){}window.__applyTheme(t);label.textContent=langs[t];saved=t;isDark=(t==='dark')||(t==='auto'&&matchMedia('(prefers-color-scheme:dark)').matches);syncIcon();setActive(t);wrap.classList.remove('open');});
  // 系统主题变化时（auto 模式）更新图标
  matchMedia('(prefers-color-scheme:dark)').addEventListener('change',function(){if((localStorage.getItem('theme')||'auto')==='auto'){isDark=matchMedia('(prefers-color-scheme:dark)').matches;syncIcon();}});
})();
</script>`;

  html = html.replace("</body>", `${inject}\n</body>`);

  // 防闪烁：在 <head> 最前注入内联脚本，CSS 加载前即根据 localStorage 设定 data-theme
  const noFlash = `<script>(function(){try{var t=localStorage.getItem('theme')||'auto';if(t!=='auto')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();</script>`;
  if (html.includes("<head>")) {
    html = html.replace("<head>", `<head>${noFlash}`);
  }

  await fsp.writeFile(file, html, "utf8");
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

    console.log("\n=== 6. 注入语言切换按钮 ===");
    let n = 0;
    await walkHtml(PUBLIC, async (f) => {
      await injectSwitch(f).catch(() => {});
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
