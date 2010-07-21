function(e,params) {
  var query = {
    descending: true,
    include_docs: true,
    view: "links",
    key: params.id
  }
  return query;
}

