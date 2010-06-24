function(e) {
  var params = e.data.args[1];
  var query = {
    limit: 50,
    type: "newRows",
    descending: true,
    view: "domains",
    reduce: false,
    include_docs: true,
    key: params.domain

  }
  return query;
}
