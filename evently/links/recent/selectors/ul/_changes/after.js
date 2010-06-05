function(e,r) {
  var blob = $$(this);
  var widget = $(this);
  $("time",widget).prettyDate();
  //$.each( $(".message", widget), function(idx, msg) {
  //   msg.html(msg.html().replace(/\@([\w\-]+)/g,function(user,name) {
  //     return '<a href="#/mentions/'+encodeURIComponent(name)+'">'+user+'</a>';
  //   }).replace(/\#([\w\-\.]+)/g,function(word,tag) {
  //     return '<a href="#/tags/'+encodeURIComponent(tag)+'">'+word+'</a>';
  //   }));
  //});
 blob.meta = e.value;
}
