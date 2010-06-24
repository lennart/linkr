function(doc) {
  if(doc.url) {
    var rxp = new RegExp("(https?://)?([^/]+)"); 
    var matches = rxp.exec(doc.url);
    emit(matches[2], 1);
  }
}
