function(doc, req) {
  // !json templates.notfound

  var Handlebars = require('views/lib/handlebars');
  Handlebars.registerHelper('slugify', function(str) {
    return str.toLowerCase().replace(' ','-').replace('[^a-zA-Z\d-]','');
  });


  var template = Handlebars.compile(templates.notfound);
  return {'code': 404, 'body': template({'title': 'Not found', 'message': 'The page you requested could not be found'})};
}
