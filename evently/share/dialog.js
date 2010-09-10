function(e, p) {
  var app = $$(this).app, widget = $(this), 
            state = $$(this).state || "urlForm";
  widget.trigger(state, [p.data.args[p.data.args.length-1]]);
  widget.dialog({resizable: false, width: "600px", modal: true});
}
