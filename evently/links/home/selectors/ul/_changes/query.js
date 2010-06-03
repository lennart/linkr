function() {
  var profile = $$("#profile").profile;
  var query;
  console.debug("The Query");
  query = {
    limit: 50,
    type: "newRows",
    descending: true
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
