function(e) {
  var params = e.data.args[1];
  var query = {
    limit: 50,
    type: "newRows",
    descending: true,
    view: "tags",
    reduce: false,
    include_docs: true,
    startkey: [params.tag, {}],
    endkey: [params.tag]

  }
  return query;
}


