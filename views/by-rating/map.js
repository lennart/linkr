function(doc) {
  if(doc.created_at && doc.public) {
    var rating = 0;
    var date = new Date(doc.created_at
        .replace(/-/g,"/")
        .replace("T"," ")
        .replace(/\..{3}/,"")
        .replace(/Z$/," +0000"));
    var currentDate = (new Date()).getTime();

    if(doc.ratings) {
      for(var key in doc.ratings) {
        rating = rating + doc.ratings[key];
      }
    }
    var totalRating = (1 / (currentDate - date+ 0.1))*(rating+1);
    emit(totalRating, 1);
  }
}


