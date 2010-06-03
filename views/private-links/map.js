function(doc) {
  if(doc["created_at"] && doc.name && doc.url) {
    emit([doc.name, new Date(doc.created_at)], doc);
  }
}
