function(doc) {
  if(doc.name && doc.url) {
    emit(doc.name, 1);
  }
}
