#!/usr/bin/env bash

handlebars -p templates/loginDialog.hbs -f views/lib/handlebars.partials.js -c views/lib/handlebars.runtime -e hbs
handlebars templates/*.hbs -f views/lib/handlebars.templates.js -c views/lib/handlebars.runtime -e hbs
couchapp push . $1