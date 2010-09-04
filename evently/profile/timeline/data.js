function(profile) {
  if(profile === undefined) {
    $.pathbinder.go("/");
    return {};
  }
  else {
    return profile;
  }
}
