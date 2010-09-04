function(newDoc, savedDoc, userCtx, secObj) {
  var v = require("lib/validate").init(newDoc, savedDoc, userCtx, secObj);

//  v.isAuthor = function() {
//    return v.isAdmin() || userCtx.roles.indexOf("author") != -1;
//  };


  // admins or owner can always delete
  if ((v.isAdmin() || (savedDoc && (savedDoc.name == userCtx.name))) && newDoc._deleted) return true;
  /*if (newDoc.name) {
    enforce(newDoc.name == userCtx.name,
      "You may only update documents with author " + userCtx.name);
  }*/
 /* if (v.id == "") {
    return false;
  }*/

 v.unchanged("name");
 // v.unchanged("created_at");

  if (newDoc.created_at) v.dateFormat("created_at");

  // docs with authors can only be saved by their author
  // admin can author anything...
  if(newDoc.url && newDoc.nickname) { 
    v.require("created_at", "nickname", "url", "message");
  }
  //  } else if (newDoc.type == 'comment') {
  //    v.require("created_at", "post_id", "comment", "format", "commenter");
  //    v.assert((newDoc.commenter.name || newDoc.commenter.nickname) && (typeof newDoc.commenter.email != "undefined"),
  //      "Comments must include name and email.");
  //    if (newDoc.commenter.url) {
  //      v.assert(newDoc.commenter.url.match(/^https?:\/\/[^.]*\..*/),
  //        "Commenter URL must start with http://.");
  //    }
  //  }

}
