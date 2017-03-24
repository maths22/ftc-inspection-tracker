function(doc, req){
    if (!doc){
        return [null, {'json': 'Document not found',
        'code': 404}]
    }
    delete doc._rev;
    delete doc._revisions;
    doc['_id'] = JSON.parse(req['body'])['data']['key'];
    doc['key'] = doc['_id'];
    doc['author'] = req['userCtx']['name'];
    return [doc, {'json': 'Document updated'}];
}
