function() {
  var widget = $(this);
  var form = this;
  var app = $$(this).app;
  var url = $("[name=url]", form).val();
  if(/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i.test(url)) {
    var message = $("[name=message]", form).val();
    var gluedTo = $("[name=gluedTo]", form).val();
    console.log("Glueing to "+gluedTo);
    $("form",$("#profile")).append("<img src='images/spinner.gif' class='spinner' />");
    var doc = {
      created_at : new Date(),
      name : $$("#profile").profile.name,
      url : url,
      message : message,
      gluedTo : gluedTo
    };
    app.db.saveDoc(doc, {
      success : function(resp) {
        console.log("Saved Reply");
        app.db.openDoc(gluedTo, {
            success: function(glueDoc) {
              console.log("Opened Glue Doc");
              if(!glueDoc.glueCount) {
                glueDoc.glueCount = 0;
              }
              glueDoc.glueCount = glueDoc.glueCount + 1;
              app.db.saveDoc(glueDoc, {
                success : function(glueResp) {
                  console.log("Saved Glue Doc");
                  $("[name=url]", form).val("");
                  $("[name=message]", form).val("");
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

