function(doc) {
  if(doc["created_at"] && doc.name && doc.url) {
    emit([doc.name, doc.created_at], 1);
  }
}
