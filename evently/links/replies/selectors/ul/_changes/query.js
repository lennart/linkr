function() {
  var profile = $$("#profile").profile;
  var query;
  query = {
    limit: 50,
    type: "newRows",
    descending: true
  }
  if(profile) {
    query.view = "mention-links",
    query.startkey = [profile.name, {}],
    query.endkey = [profile.name];
  }
  return query;
}
  
