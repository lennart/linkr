function(e, p) {
  $$(this).profile = p;
  $("#links").trigger("recent"), $("input[name=url]",$(this)).focus();
}
