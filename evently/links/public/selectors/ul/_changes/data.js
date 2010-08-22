function(data,p) {
  var app = $$("#links").app, 
      stash = data.doc;
  stash.profile_name = stash.name;
  user = $$("#users").profiles[stash.profile_name];
  var ratings = [];
  if(stash.ratings) {
    $.each(stash.ratings, function(name, object) {
        ratings.push(object);
        });
  }
  stash.ratings = ratings;
  stash.rating = data.key;
  if(user === undefined) {
  }
  else {
    stash.gravatar_url = user.gravatar_url
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

  return stash;
};

