function(doc) {
  if(doc.url) {
    var rxp = new RegExp("(https?://)?([^/]+)"); 
    var matches = rxp.exec(doc.url);
    var domain = matches[2];
    var parts = domain.split(".").reverse();
    emit(parts[1]+"."+parts[0], 1);
  }
}

