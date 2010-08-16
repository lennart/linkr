function parseRFC2822(rfc) {
var date = new Date(rfc
        .replace(/-/g,"/")
        .replace("T"," ")
        .replace(/\..{3}/,"")
        .replace(/Z$/," +0000"));
return new Date(date);
}

function weightRating(offset, rating) {

 const MINUTE = 60000;
    const HOUR = 3600000;
    const DAY = 86400000;
    const WEEK = 604800000;
    const MONTH = 2419200000;

if (offset < MINUTE) {
	  rating *= 1000; 
        }	
        else if (offset < HOUR) {
          rating *= 100; 
        }
        else if (offset < DAY) {
          rating *= 10;
        }
        else if (offset < WEEK) {
          rating *= 0.1;
        }
        else if( offset < MONTH) {
          rating *= 0.01;
        }
return rating;
}

function(doc) {
  if(doc.created_at && doc.public) {
    var rating = 0;

    var currentDate = (new Date()).getTime();
    var creationDate = parseRFC2822(doc.created_at).getTime();
    if(doc.ratings) {
      for(key in doc.ratings) {
        var ratingDate = parseRFC2822(doc.ratings[key].date).getTime();
      	var offset = currentDate - ratingDate;
        var singleRating = weightRating(offset, doc.ratings[key].rating);
        rating = rating + singleRating;
      }
    }
    else {
      rating = 1;
    }
    var offset = currentDate - creationDate;
    var totalRating = weightRating(offset, rating);
    emit(totalRating, 1);
  }
}



