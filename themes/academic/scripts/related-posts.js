/* 注册 helper：返回与当前文章最相关的 N 篇其他文章
   算法：
     1. 标签重叠为主（每个共享标签 +2 分），同分类加权（+3 分）
     2. 按分数倒序，同分按日期倒序
     3. 兜底：若相关文章不足 limit，用最新文章补足（排除自身和已选）
   用法：{% for p in related_posts(page, 3) %} ... {% endfor %}
*/
hexo.extend.helper.register('related_posts', function (post, limit) {
  limit = limit || 3;
  var all = this.site.posts;
  if (!all || !post) return [];

  var myTags = {};
  (post.tags || []).forEach(function (t) {
    if (t && t._id) myTags[t._id] = true;
    if (t && t.name) myTags[t.name] = true;
  });
  var myCats = {};
  (post.categories || []).forEach(function (c) {
    if (c && c._id) myCats[c._id] = true;
    if (c && c.name) myCats[c.name] = true;
  });

  var scored = [];
  var others = []; // 全部其他文章（兜底用）
  all.forEach(function (p) {
    if (!p || p.path === post.path) return;
    others.push(p);
    var score = 0;
    (p.tags || []).forEach(function (t) {
      if (t && (myTags[t._id] || myTags[t.name])) score += 2;
    });
    (p.categories || []).forEach(function (c) {
      if (c && (myCats[c._id] || myCats[c.name])) score += 3;
    });
    if (score > 0) scored.push({ post: p, score: score });
  });

  scored.sort(function (a, b) {
    if (b.score !== a.score) return b.score - a.score;
    var da = a.post.date ? a.post.date.valueOf() : 0;
    var db = b.post.date ? b.post.date.valueOf() : 0;
    return db - da;
  });

  var result = scored.slice(0, limit).map(function (s) { return s.post; });

  // 兜底：不足 limit 时，用最新文章补足
  if (result.length < limit) {
    var chosen = {}; // 已选 path 集合
    result.forEach(function (p) { chosen[p.path] = true; });
    others.sort(function (a, b) {
      var da = a.date ? a.date.valueOf() : 0;
      var db = b.date ? b.date.valueOf() : 0;
      return db - da;
    });
    for (var i = 0; i < others.length && result.length < limit; i++) {
      if (!chosen[others[i].path]) {
        result.push(others[i]);
        chosen[others[i].path] = true;
      }
    }
  }

  return result;
});

