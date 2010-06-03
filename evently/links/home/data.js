function(e, p) {
  var profile = $$("#profile").profile;
  var loggedIn = false;
  if(profile) {
    loggedIn = true;
  }
  console.debug("I've already spent too much time");
  return { loggedIn : loggedIn }; 
}
