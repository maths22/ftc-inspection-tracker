function(head, req){
    provides('html', function() {

      var entries = [];

      while(row = getRow()){
        entries.push(row);
      }

      var Handlebars = require('views/lib/handlebars');

      var template = Handlebars.templates['eventList']
      return template({'entries': entries});
    });
}
