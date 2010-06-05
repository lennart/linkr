function(e, p) {
  var profile = $$("#profile").profile;
  var loggedIn = false;
  if(profile) {
    loggedIn = true;
  }
  return { loggedIn : loggedIn }; 
}
