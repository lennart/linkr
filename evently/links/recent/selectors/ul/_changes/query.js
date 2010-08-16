function() {
  var query = {
    limit: 50,
    type: "newRows",
    descending: true,
    include_docs: true,
    view: "by-rating"
  }
  return query;
}
