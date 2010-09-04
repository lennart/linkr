function(e, p) {
  console.log("we're here");
  $$(this).profile = p;

  $(this).trigger("timeline",[]);
}
