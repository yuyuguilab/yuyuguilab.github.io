// 移动端导航开关
var toggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // 点击导航链接后收起
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') nav.classList.remove('open');
  });
}
