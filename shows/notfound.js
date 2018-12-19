function(doc, req) {

  var Handlebars = require('views/lib/handlebars');


  var template = Handlebars.templates['notfound'];
  return {'code': 404, 'body': template({'title': 'Not found', 'message': 'The page you requested could not be found'})};
}
