function(e, p) {
  $("input[name=url]",$(this)).focus();
  if($.pathbinder.currentPath() != "#/home") {
    $("[name=public]",$(this)).attr("checked", "checked");
  }
}
