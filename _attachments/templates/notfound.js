(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['notfound.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"/css/styles.css\">\n\n  <script src=\"/js/jquery.min.js\"></script>\n\n\n  <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n</head>\n<body class=\"container\"><h2>"
    + ((stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n</body>\n</html>\n";
},"useData":true});
})();