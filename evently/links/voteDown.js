function(e,p) {
  var app = $$(this).app, profile = $$("#profile").profile;
  app.db.openDoc($(e.target).attr("data-id"), {
    success: function(doc) {
      if(!doc.ratings) {
        doc.ratings = {};
      }
      var userRating = doc.ratings[profile.name];
      if(userRating != -1) {
        userRating = -1;
        doc.ratings[profile.name] = {
          rating: userRating,
          name: profile.name,
          date: new Date()
        }
        app.db.saveDoc(doc, {
            success: function(resp) {
              console.log("Yay, voted up");
              console.log(doc);
            }
          });
      }
      else {
        console.log("Already up voted");
      }
    }});
  return true;
}
