function(e,p) {
  var shareBox = $(document.createElement("div"));
  shareBox.attr("id", "shareBox");
  shareBox.evently("share",$$(this).app);
  shareBox.trigger("urlForm");
  shareBox.dialog({resizable: false, width: "600px", modal: true});
}
