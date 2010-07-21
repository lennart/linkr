function(doc) {
  if(doc.gluedTo && doc.url && doc.name) {
    emit([doc.gluedTo, doc.created_at], doc);
  }
}
