(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['display.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<th>Team</th>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "<th>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</th>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class=\"status hidden\">\n  <input type=\"checkbox\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + "\" value=\"1\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + "\" class=\"statusCheckbox\" />\n  <label for=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + "\"></label>\n</td>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<td>"
    + container.escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + "</td>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.inputField,depth0,{"name":"inputField","hash":{"number":(depths[1] != null ? depths[1].number : depths[1]),"name":(helpers.slugify || (depth0 && depth0.slugify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"slugify","hash":{},"data":data})},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "      <div class=\"col-md-"
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1].colSize : depths[1]), depth0))
    + "\">\n        <table class=\"teams-table table table-striped table-bordered table-condensed\">\n          <tr>\n"
    + ((stack1 = container.invokePartial(partials.headings,depth0,{"name":"headings","hash":{"categories":(depths[1] != null ? depths[1].categories : depths[1])},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "          </tr>\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </table>\n      </div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "          <tr>\n"
    + ((stack1 = container.invokePartial(partials.checkboxes,depth0,{"name":"checkboxes","hash":{"categories":(depths[2] != null ? depths[2].categories : depths[2]),"number":depth0},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "          </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"/css/styles.css\">\n\n\n  <script src=\"/js/jquery.min.js\"></script>\n  <script src=\"/js/jquery.retryAjax.min.js\"></script>\n  <script src=\"/js/bootstrap.min.js\"></script>\n  <script src=\"/js/auth.js\"></script>\n  <script src=\"/js/inspection.js\"></script>\n\n  <title>"
    + alias4(((helper = (helper = helpers.event || (depth0 != null ? depth0.event : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"event","hash":{},"data":data}) : helper)))
    + "</title>\n</head>\n\n\n\n\n<body>\n  <div class=\"container\">\n    <h2>"
    + alias4(((helper = (helper = helpers.event || (depth0 != null ? depth0.event : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"event","hash":{},"data":data}) : helper)))
    + "</h2>\n    <form id=\"resultsForm\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.groupedTeams : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </form>\n  </div>\n\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <p class=\"pull-right text-muted\">\n        <button type=\"button\" class=\"btn btn-link\" id=\"loginModalButton\">Login</button>\n        <button type=\"button\" class=\"btn btn-link\" id=\"editModalButton\">Edit</button>\n      </p>\n    </div>\n  </footer>\n\n"
    + ((stack1 = container.invokePartial(partials.loginDialog,depth0,{"name":"loginDialog","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"editModal\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Edit Configuration</h4>\n      </div>\n      <div class=\"modal-body\">\n      <form id=\"editForm\">\n        <div class=\"form-group\">\n          <label for=\"editForm-name\">Event</label>\n          <input name=\"event\" id=\"editForm-name\" type=\"text\" class=\"form-control\" placeholder=\"Event\" required value=\""
    + alias4(((helper = (helper = helpers.event || (depth0 != null ? depth0.event : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"event","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"editForm-categories\">Categories</label>\n          <span id=\"editForm-categories-help\" class=\"help-block\">Categories must be separated by commas</span>\n          <textarea name=\"categories\" id=\"editForm-categories\" class=\"form-control\" placeholder=\"Check In,Hardware,Field,Judging\" rows=\"2\" required aria-describedby=\"editForm-categories-help\">"
    + alias4(((helper = (helper = helpers.categories || (depth0 != null ? depth0.categories : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categories","hash":{},"data":data}) : helper)))
    + "</textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"editForm-teams\">Teams</label>\n          <span id=\"editForm-teams-help\" class=\"help-block\">Team numbers must be separated by commas</span>\n          <textarea name=\"teams\" id=\"editForm-teams\" class=\"form-control\" placeholder=\"1,2,3,4\" rows=\"5\" required aria-describedby=\"editForm-teams-help\">"
    + alias4(((helper = (helper = helpers.teams || (depth0 != null ? depth0.teams : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"teams","hash":{},"data":data}) : helper)))
    + "</textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"editForm-colCount\">Column count</label>\n          <input name=\"colCount\" id=\"editForm-colCount\" type=\"number\" class=\"form-control\" placeholder=\"Column count\" required value=\""
    + alias4(((helper = (helper = helpers.colCount || (depth0 != null ? depth0.colCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colCount","hash":{},"data":data}) : helper)))
    + "\" min=\"1\">\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Save</button>\n      </form>\n      </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n\n</body>\n</html>\n";
},"main_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"args":["headings"],"data":data}) || fn;
  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"args":["inputField"],"data":data}) || fn;
  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"args":["checkboxes"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
})();