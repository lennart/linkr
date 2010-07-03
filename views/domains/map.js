function(doc) {
  if(doc.url) {
    var rxp = new RegExp("(https?://)?([^/]+)"); 
    var matches = rxp.exec(doc.url);
    var domain = matches[2];
    var parts = domain.split(".").reverse();
    var second_level_domain = parts[1]+"."+parts[0];
    if(["bit.ly","imgur.com","yousendit.com","u.nu","tinyurl.com","j.mp","imageshack.com","yfrog.com","megaupload.com"].indexOf(second_level_domain) == -1) {
      emit(second_level_domain, 1);
    }
  }
}

