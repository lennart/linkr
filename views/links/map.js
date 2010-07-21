function(doc) {
  if(doc.url && doc.name) {
    emit(doc["_id"], doc);
  }
}
