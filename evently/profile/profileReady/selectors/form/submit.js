function() {
  var form = this;
  var doc = {
    created_at : new Date(),
    nickname : $$("#profile").profile.nickname,
    url : $("[name=url]", form).val(),
    message : $("[name=message", form).val()
  };

  $$(this).app.db.saveDoc(doc, {
    success : function() {
      $("[name=url]", form).val("");
      $("[name=message", form).val("");
    }
  });
  return false;
};
