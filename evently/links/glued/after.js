function(e, p) {
  var widget = $(this);
  $("time",widget).prettyDate();
  var message = $(".message",widget);
  message.html($.linkify($.mustache.escape(message.html())));
}
