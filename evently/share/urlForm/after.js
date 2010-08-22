function(e, p) {
  //var widget = $(this);
//widget.dialog({resizable: false, width: "600px", modal: true});
  $("input[name=url]",$(this)).focus();
  if($.pathbinder.currentPath() != "#/home") {
    $("[name=public]",$(this)).attr("checked", "checked");
  }
}
