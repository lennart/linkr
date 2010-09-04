function(e, userCtx) {
  
  userCtx.profile = $$(this).profile || {};
  console.log(userCtx);
  return userCtx;
}
