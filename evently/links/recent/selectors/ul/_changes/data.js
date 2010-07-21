function(data) {
  var app = $$("#links").app, 
      profile = $$("#profile").profile, stash = data.doc;
  stash.profile_name = stash.name;
  stash.rating = data.key;
  user = $$("#users").profiles[stash.profile_name];
  if(user === undefined) {
  }
  else {
    stash.gravatar_url = user.gravatar_url
  }
  if(profile && (stash.name == profile.name)) {
    stash.author = true;
    stash.name = "you";
  }
  else {

  }
  if(stash.public) {
    stash.togglePublic = "published"
  }
  else {
    stash.togglePublic = "unpublished"
  }
  var imgRxp = new RegExp(/\.(jpg|jpeg|gif|png)$/);
  if(imgRxp.exec(stash.url.toLowerCase())) {
    stash.image = true;
  }

  if($$("#profile").unseen.indexOf(stash["_id"]) != -1) {
      stash.unseen = true;
  }

  return stash;
};
