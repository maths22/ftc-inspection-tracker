var Handlebars = require("views/lib/handlebars.runtime");
Handlebars.default.registerHelper('slugify', function(str) {
    return str.toLowerCase().replace(' ','-').replace('[^a-zA-Z\d-]','');
});