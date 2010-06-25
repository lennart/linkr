function(data) {
  var app = $$("#links").app, 
      profile = $$("#profile").profile, stash = data.doc;
  stash.profile_name = stash.name;
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
  return stash;
};
