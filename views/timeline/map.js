function(doc) {
  if (doc.url && doc.name && doc["created_at"] && doc.public) {
    emit([doc["created_at"], doc.name], doc);
  }
}
