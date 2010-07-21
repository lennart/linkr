function(e,p) {
  var app = $$(this).app;
  console.log(e);
  app.db.openDoc($(e.target).attr("data-id"), {
    success: function(doc) {
      doc.public = doc.public ? false : true;
      app.db.saveDoc(doc, {
          success: function(resp) {
            console.log("Yay, done");
            console.log(doc);
            if(doc.public) {
              $(e.target).html("<img src='images/published.png'>");
            }
            else {
              $(e.target).parents("li").fadeOut(500);
            }
          }
        });
    }});
  return true;
}
