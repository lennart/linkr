function(e) {
  var params = e.data.args[1];
  var search_query = params.query.split("+");
  var query = {
    limit: 50,
    type: "newRows",
    descending: true,
    view: "by-tags",
    include_docs: true,
    keys: search_query
  }
  return query;
}


