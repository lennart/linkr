function(profile) {
  console.log("Now here");
  if(profile === undefined) {
    $.pathbinder.go("/");
    return {};
  }
  else {
    return profile;
  }
}
