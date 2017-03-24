function(doc, req) {
  if (doc._id != req.query.id){
      return false;
  }
  return true;
}
