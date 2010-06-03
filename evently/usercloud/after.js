function(e, p) {
  $.couch.userDb(function(db) {
      db.allDocs();
      });
}
