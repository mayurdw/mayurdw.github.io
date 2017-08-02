var quote = [
"You can do anything, but not everything. —David Allen",   "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. —Antoine de Saint-Exupéry",
"You miss 100 percent of the shots you never take. —Wayne Gretzky"
];
//Quote array database

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
//Twitter share icon script from Twitter.com

$(document).ready(function() {

    $("#next").on("click", function(){
      var i = Math.floor(Math.random()*quote.length);
      console.log(quote[i]);
      $("#quote").html(quote[i]);
    });
  });
//Next button functionality
