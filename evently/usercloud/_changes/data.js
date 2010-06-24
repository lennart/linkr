function(resp) {
  var domains = resp.rows.map(function(r) {
    return {
      domain : r.key,
      domain_uri : encodeURIComponent(r.key),
      count : (r.value * 4) + 10
    }
  });
  return {domains:domains};
}
