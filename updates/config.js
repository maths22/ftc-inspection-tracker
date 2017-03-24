function(doc, req){
    if (!doc){
        return [null, {'json': 'Document not found',
        'code': 404}]
    }
    doc['config'] = JSON.parse(req['body'])['config'];
    return [doc, {'json': 'Document updated'}];
}
