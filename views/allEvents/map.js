function (doc) {
  if (doc.config && doc.config.event && doc._id != 'template') {
    emit(doc._id, doc.config.event);
  }
}
