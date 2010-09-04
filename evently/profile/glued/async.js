function(cb,e,r) {
  var app = $$(this).app, userCtx = r.userCtx, widget = $(this);
  if(r.userCtx === undefined) {
    cb($$(this).profile);
  }
  else {
    var User = app.require("lib/user");
    User.profile(cb,userCtx,widget,app); 
  }
}
