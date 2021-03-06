function() {
  var form = this;
  var widget = $(this);
  var url = $("[name=url]", form).val();
  if(/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i.test(url)) {
    var submit = $("[type=submit]", form).attr("disabled","disabled");
    var push = $("[name=push]", form).val();
    var pull = $("[name=pull]", form).val();
    
    var message = $("[name=message]", form).val()
    var public = $("input[name=public]", form).is(':checked');

    widget.parent().prepend("<img src='images/spinner.gif' class='spinner' />");

    var doc = {
      created_at : new Date(),
      name : $$("#profile").profile.name,
      url : url,
      message : message
    };
    if(push !== undefined) {
      doc.pushes = push;
    }
    else if (pull !== undefined) {
     // doc.pull 
    }
    if(public) { doc.public = true; }
    $$(this).app.db.saveDoc(doc, {
      success : function() {
        $("[name=url]", form).val("");
        $("[name=message]", form).val("");
        $(".spinner",widget.parent()).hide();
        widget.parent().dialog("close");
        if(!doc.public && ($.pathbinder.currentPath() == "#/timeline")) {
          $.pathbinder.go("/home");
        }
        }
    });
  }
  else {
    $(".url.error",widget).show();
  }
  return false;
};
