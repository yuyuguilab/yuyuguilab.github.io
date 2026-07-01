/* 注册 helper：根据分类 slug 或中文名返回当前语言的显示名
   用法：
     {{ cat_display('business') }} → 英文站 "Business"，中文站 "商业"
     {{ cat_display('商业') }}      → 同上（兼容 front-matter 里的中文分类名）
   用于文章页面包屑、分类页标题，避免英文站显示中文分类名。
   分类登记在 themes/academic/_config.yml 的 categories（含 slug / name.zh / name.en）。
*/
hexo.extend.helper.register('cat_display', function (key) {
  if (!key) return '';
  var lang = this.config.lang || 'en';
  var cats = this.theme.categories || [];
  for (var i = 0; i < cats.length; i++) {
    var c = cats[i];
    // 匹配 slug 或任一语言的 name
    if (c.slug === key || (c.name && (c.name.zh === key || c.name.en === key))) {
      return (c.name && c.name[lang]) || c.slug;
    }
  }
  return key;
});

