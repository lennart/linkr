function() {
  var form = this;
  var app = $$(this).app;
  var url = $("[name=url]", form).val();
  var message = $("[name=message]", form).val();
  var gluedTo = $("[name=gluedTo]", form).val();
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
              success : function(resp) {
                console.log("Saved Glue Doc");
                $("[name=url]", form).val("");
                $("[name=message]", form).val("");
              }
              });
          }
        });
      }
  });
  return false;
};
