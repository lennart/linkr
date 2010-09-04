function() {
  var widget = $(this);
  var form = this;
  var app = $$(this).app;
  var url = $("[name=url]", form).val();
  if(/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i.test(url)) {
    var submit = $("[type=submit]", form).attr("disabled","disabled");
    var message = $("[name=message]", form).val();
    var gluedTo = $("[name=gluedTo]", form).val();
    widget.parent().prepend("<img src='images/spinner.gif' class='spinner' />");
    var doc = {
      created_at : new Date(),
      name : $$("#profile").profile.name,
      url : url,
      message : message,
      gluedTo : gluedTo
    };
    app.db.saveDoc(doc, {
      success : function(resp) {
        app.db.openDoc(gluedTo, {
            success: function(glueDoc) {
              if(!glueDoc.glueCount) {
                glueDoc.glueCount = 0;
              }
              glueDoc.glueCount = glueDoc.glueCount + 1;
              app.db.saveDoc(glueDoc, {
                success : function(glueResp) {
                  $("[name=url]", form).val("");
                  $("[name=message]", form).val("");
                  $(".spinner",widget.parent()).hide();
                  widget.parent().dialog("close");
                }
              });
            }
          });
        }
    });
  }
  else {
    $(".url.error",widget).show();
  }
  return false;
};

