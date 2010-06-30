function(head, req) {
  //mainly taken from http://github.com/jchris/sofa
  var ddoc = this;
  var List = require("vendor/couchapp/lib/list");
  var path = require("vendor/couchapp/lib/path").init(req);
  var Atom = require("vendor/couchapp/lib/atom");

  var feedPath = path.list('atom','by-date-and-domain',{descending:true, limit:25, format:"atom"});
  var indexPath = path.absolute("/#/");

  provides("atom", function() {    
    var path = require("vendor/couchapp/lib/path").init(req);

    // we load the first row to find the most recent change date
    var row = getRow();
    
    // generate the feed header
    var feedHeader = Atom.header({
      updated : (row ? new Date(row.value.created_at) : new Date()),
      title : ddoc.linkr.title,
      feed_id : path.absolute(indexPath),
      feed_link : path.absolute(feedPath),
    });
    
    // send the header to the client
    send(feedHeader);

    // loop over all rows
    if (row) {
      do {
        // generate the entry for this row
        var feedEntry = Atom.entry({
          entry_id : path.absolute('/#/'+encodeURIComponent(row.id)),
          title : row.key[1],
          content : "<a href=\""+row.value.url+"\">"+row.value.url+"</a> – "+row.value.message,
          updated : new Date(row.value.created_at),
          author : row.value.name,
          alternate : row.value.url
        });
        // send the entry to client
        send(feedEntry);
      } while (row = getRow());
    }

    // close the loop after all rows are rendered
    return "</feed>";
  });

}
