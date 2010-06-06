function(data) {
  var app = $$("#links").app, 
      profile = $$("#profile").profile, stash = data.value;
  stash.profile_name = profile.name;
  if(profile && (stash.name == profile.name)) {
    stash.author = true;
    stash.name = "you";
  }
  else {

  }
  return stash;
};
