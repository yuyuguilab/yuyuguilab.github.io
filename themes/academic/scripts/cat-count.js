/* 注册 helper：根据分类 slug 返回文章数（含 0）
   用法：{{ cat_count('company') }} → 1
   用于首页/分类索引页的分类卡片显示文章数
*/
hexo.extend.helper.register('cat_count', function (slug) {
  var cat = this.site.categories.findOne({ slug: slug });
  return cat ? cat.posts.length : 0;
});
