function(e,p) {
  var app = $$(this).app;
  console.log("Marking all as read");
  var name = "org.couchdb.user:"+$$("#profile").profile.name;
  $.couch.userDb(function(db) {
      db.openDoc(name, {
        success: function(doc) {
          doc["couch.app.profile"].unseen.linkr = [];
          db.saveDoc(doc, {
            success: function(resp) {
              var unseen = $("#links li.unseen");
              unseen.removeClass("unseen");
              $("a[name=markRead]",unseen).fadeOut(500);
            }
          });
        }
      });
    });
  return true;
}
