function() {
  var form = this;
  var widget = $(this);
  var url = $("[name=url]", form).val();
  var message = $("[name=message]", form).val()
  var public = $("input[name=public]", form).is(':checked');

  $("form",$("#profile")).append("<img src='images/spinner.gif' class='spinner' />");
  var doc = {
    created_at : new Date(),
    name : $$("#profile").profile.name,
    url : url,
    message : message
  };
  if(public) { doc.public = true; }
  $$(this).app.db.saveDoc(doc, {
    success : function() {
      $("[name=url]", form).val("");
      $("[name=message]", form).val("");
      if(!doc.public && ($.pathbinder.currentPath() == "/")) {
        $.pathbinder.go("/home");
      }
      $("#profile").trigger("profileReady");
      }
  });
  return false;
};
