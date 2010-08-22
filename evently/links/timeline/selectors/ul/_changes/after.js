function(e,r) {
  var blob = $$(this);
  var widget = $(this);
  $("time",widget).prettyDate();
  var message = $(".message",widget).first();
  message.html($.linkify($.mustache.escape(message.html())));
  $(".spinner",$("#profile")).fadeOut(500);
  blob.meta = e.value;
}
