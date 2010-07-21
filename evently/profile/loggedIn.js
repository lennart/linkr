function(e, r) {
  var userCtx = r.userCtx, widget = $(this), app = $$(this).app;
  // load the profile from the user doc
  $.couch.userDb(function(db) {
    var userDocId = "org.couchdb.user:"+userCtx.name;
    db.openDoc(userDocId, {
      success : function(userDoc) {
        var profile = userDoc["couch.app.profile"];
        if (profile) {
          // we copy the name to the profile so it can be used later
          // without publishing the entire userdoc (roles, pass, etc)
          profile.name = userDoc.name;
          $$(widget).profile = profile;
          $$(widget).lastLogin = profile.lastLogin;
          userDoc["couch.app.profile"].lastLogin = new Date();
          if(!userDoc["couch.app.profile"].unseen) {
            userDoc["couch.app.profile"].unseen = {};            
          }
          if(!userDoc["couch.app.profile"].unseen["linkr"]) {
            userDoc["couch.app.profile"].unseen["linkr"] = [];            
          }
          app.view("by-date-and-user", {
            endkey: [$$(widget).lastLogin,{}],
            descending: true,
            success: function(resp) {
              var ids = [];
              $.each(resp.rows,function(idx,i) { if(i.key[1] != profile.name) { ids.push(i.id); } });
              console.log(resp);
              console.log(ids);
              userDoc["couch.app.profile"].unseen["linkr"] = userDoc["couch.app.profile"].unseen["linkr"].concat(ids);            
              db.saveDoc(userDoc, {
                error: function(resp) {
                  alert("WTF");
                  console.log(resp);
                },
                success: function(resp) {
                  $$(widget).unseen = userDoc["couch.app.profile"].unseen["linkr"];
                  widget.trigger("profileReady", [profile]);
                }
              });
            }
            });
        } else {
          widget.trigger("noProfile", [userCtx]);
        }
      }
    });
  });
}
