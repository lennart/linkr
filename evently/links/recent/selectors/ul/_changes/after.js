function(e,r) {
  var blob = $$(this);
  var widget = $(this);
  $("time",widget).prettyDate();
  var message = $(".message",widget).first();
  message.html($.linkify($.mustache.escape(message.html())));
  var authorElement = $(".author", widget).first()
  var author = authorElement.attr("data-id");
  $.couch.userDb(function(db) {
      db.openDoc("org.couchdb.user:"+author, {success: function(doc) {
        //console.debug(doc["couch.app.profile"].email);
        authorElement.html("<img src="+doc["couch.app.profile"].gravatar_url+">");
        }});
  });
  blob.meta = e.value;
}
