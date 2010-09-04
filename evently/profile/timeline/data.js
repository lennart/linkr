function(profile) {
  console.log("Now here");
  console.log(profile);
  if(profile === undefined) {
    $.pathbinder.go("/");
    return {};
  }
  else {
    return profile;
  }
}
