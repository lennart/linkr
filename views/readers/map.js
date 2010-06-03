function(doc) {
  if(doc.reader && doc.writer) {
    emit([doc.reader, doc.created_at, doc.writer], null);
  }
}
