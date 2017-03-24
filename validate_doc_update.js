function(newDoc, oldDoc, userCtx, secObj) {

  if(!userCtx.name) {
    throw({forbidden : 'Must be logged in'});
  }

  if(userCtx.roles.indexOf('_admin') >= 0) {
    return;
  }

  if(userCtx.name != newDoc.author || (oldDoc != null && userCtx.name != oldDoc.author)) {
    throw({forbidden : 'Not document author'});
  }
}
