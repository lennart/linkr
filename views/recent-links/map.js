function(doc) {
  if (doc.url && doc.nickname && doc["created_at"]) {
    emit(doc["created_at"], doc);
  };
}
