function(head, req){
    // !json templates.eventList
    // !json templates.loginDialog
    provides('html', function() {

      var entries = [];

      while(row = getRow()){
        entries.push(row);
      }

      var Handlebars = require('views/lib/handlebars');
      Handlebars.registerHelper('slugify', function(str) {
        return str.toLowerCase().replace(' ','-').replace('[^a-zA-Z\d-]','');
      });

      Handlebars.registerPartial('loginDialog', templates.loginDialog);

      var template = Handlebars.compile(templates.eventList);
      return template({'entries': entries});
    });
}
