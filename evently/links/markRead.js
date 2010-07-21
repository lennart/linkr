function(e,p) {
  var app = $$(this).app;
  console.log("Marking as read");
  var name = "org.couchdb.user:"+$$("#profile").profile.name;
  $.couch.userDb(function(db) {
      db.openDoc(name, {
        success: function(doc) {
          doc["couch.app.profile"].unseen.linkr.splice(doc["couch.app.profile"].unseen.linkr.indexOf($(e.target).attr("data-id")),1);
          db.saveDoc(doc, {
            success: function(resp) {
              $(e.target).parents("li").removeClass("unseen");
              $(e.target).fadeOut(500);
            }
            });
        }
        })
      });
  return true;
}
