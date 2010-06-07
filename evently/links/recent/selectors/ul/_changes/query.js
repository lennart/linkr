function() {
  var query = {
    limit: 50,
    type: "newRows",
    descending: true,
    reduce: false,
    include_docs: true,
    view: "recent-links"
  }
  return query;
}
