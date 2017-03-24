function(doc, req){
    if (!doc){
        return [null, {'json': 'Document not found',
        'code': 404}]
    }
    if(!('completed' in doc)) {
      doc['completed'] = [];
    }
    var body = JSON.parse(req['body']);
    var node = body['node'];
    var nodeIndex = doc['completed'].indexOf(node);
    if(body['completed']) {
      if(nodeIndex < 0) {
        doc['completed'].push(node);
      }
    } else {
      if(nodeIndex >= 0) {
        doc['completed'].splice(nodeIndex,1);
      }
    }
    return [doc, {'json': 'Document updated'}];
}
