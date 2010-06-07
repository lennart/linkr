function(e,r) {
  var blob = $$(this);
  var widget = $(this);
  $("time",widget).prettyDate();
  var message = $(".message",widget).first();
  message.html($.linkify($.mustache.escape(message.html())));
  blob.meta = e.value;
}
