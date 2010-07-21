function(doc) {
  if(doc.url && doc.name && doc.public) {
    emit(doc.name, null);
  }
}
