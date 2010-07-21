function(e) {
  var params = e.data.args[2];
  query = {
    view : "glued",
    descending : true,
    type: "newRows",
    include_docs: true,
    startkey: [params.id, {}],
    endkey: [params.id]
  }
  return query;
}
