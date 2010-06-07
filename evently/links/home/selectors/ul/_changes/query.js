function() {
  var profile = $$("#profile").profile;
  var query;
  query = {
    limit: 50,
    type: "newRows",
    descending: true,
    reduce: false,
    include_docs: true
  }
  if(profile) {
    query.view = "private-links",
    query.startkey = [profile.name, {}],
    query.endkey = [profile.name];
  }
  else {
    query.view = "recent-links";
  }
  return query;
}
