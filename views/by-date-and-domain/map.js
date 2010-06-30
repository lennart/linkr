function(doc) {
  if (doc.url && doc.name && doc["created_at"] && doc.public) {
    var rxp = new RegExp("(https?://)?([^/]+)"); 
    var matches = rxp.exec(doc.url);
    var domain = matches[2];
    var parts = domain.split(".").reverse();
    emit([doc["created_at"],parts[1]+"."+parts[0]], doc);
  };
}

