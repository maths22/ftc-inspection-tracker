function(doc, req) {
  if(doc == null) {
    return {'code': 404, 'json': 'invalid doc key'};
  }

  return {
    'json': {
        'completed': doc['completed']
    }
  }
}
