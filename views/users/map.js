function(doc) {
  if(doc.name && doc.url) {
    emit(doc.name, doc["created_at"]);
  }
}
