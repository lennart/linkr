function(doc, req) {
  var accept = false;
  if(req.userCtx.name == doc.name) {
    accept = true;
  }
  return accept;
}
