// 语言切换：用户点击语言链接时，记忆选择，后续根路径自适应将沿用。
document.addEventListener('click', function (e) {
  var link = e.target.closest('.lang-switch');
  if (!link) return;
  try {
    localStorage.setItem('lang', link.getAttribute('data-lang'));
  } catch (err) { /* 隐私模式忽略 */ }
  // 不阻止默认跳转：让浏览器自然导航到目标语言页
});
