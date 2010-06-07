function(resp) {
  var tags = resp.rows.map(function(r) {
    return {
      tag : r.key,
      tag_uri : encodeURIComponent(r.key),
      count : (r.value * 4) + 10
    }
  });
  return {tags:tags};
}
