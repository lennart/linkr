function(e) {
  var params = e.data.args[1];
  var query = {
    limit: 50,
    type: "newRows",
    descending: true,
    view: "mention-links",
    startkey: [params.name, {}],
    endkey: [params.name]

  }
  return query;
}

