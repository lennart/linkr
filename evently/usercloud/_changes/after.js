function(e, p) {
  $("a",$("#usercloud")).each(function(i, val) {
      $.couch.userDb(function(db) {
        db.openDoc("org.couchdb.user:"+$(val).attr("data-id"), {success: function(doc) {
          $$(val).gravatar_url = doc["couch.app.profile"].gravatar_url;
          }});
        });
      });
}
