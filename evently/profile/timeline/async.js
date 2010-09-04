function(cb,e,r) {
  var app = $$(this).app, widget = $(this);
  if(r === undefined || r.userCtx === undefined) {
    cb($$(this).profile);
  }
  else {
    var User = app.require("lib/user");
    User.profile(cb,r.userCtx,widget,app); 
  }
}
