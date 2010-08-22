function() {
  var query = {
    limit: 50,
    type: "newRows",
    descending: true,
    include_docs: true,
    reduce: false,
    view: "recent-links"
  }
  return query;
}
