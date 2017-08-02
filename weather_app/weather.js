$.fn.capitalise = function() {
    return this.each(function() {
        var $this = $(this),
            text = $this.text(),
            tokens = text.split(" ").filter(function(t) {return t != ""; }),
            res = [],
            i,
            len,
            component;
        for (i = 0, len = tokens.length; i < len; i++) {
            component = tokens[i];
            res.push(component.substring(0, 1).toUpperCase());
            res.push(component.substring(1));
            res.push(" "); // put space back in
        }
        $this.text(res.join(""));
    });
};
$(document).ready(function(){


  var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  var key = "appid=054780fb742b2b0331d95b7281ee0030";
  var location = $('#location').html()||'Auckland';
  var pngUrl = "http://openweathermap.org/img/w/";
  var url = apiUrl+location+'&'+key;
  var pngSel, pngNum, backSel;
  var backWall =
  [
    "http://wallpaper-gallery.net/images/wallpaper-sun-rise/wallpaper-sun-rise-22.jpg",
    "http://www.tokkoro.com/picsup/422063-rain-free-wallpaper-and-screensavers.jpg",
    "http://wallpaper-gallery.net/images/free-snow-wallpaper/free-snow-wallpaper-14.jpg"
  ]
  var unit = true;

  fetch(url)
  .then(response=>response.json())
  .then(function(city) {
    console.log (city);
    var pngSel = "" + city.weather[0].id;
    console.log(pngSel[0]);
    switch (pngSel[0]) {
      case '5':
        pngNum = '10d.png';
        backSel = backWall[1];
        break;
      case '3':
        pngNum = '11d.png';
        backSel = backWall[1];
        break;
      case '6':
        pngNum = '13d.png';
        backSel = backWall[2];
        break;
      default:
        pngNum = '01d.png';
        backSel = backWall[0];
        break;
    }

    $('#button').on('click','.btn-toggle',function () {

      $(this).find('.btn').toggleClass('active');

      if ($(this).find('.btn-primary').length > 0) {
        $(this).find('.btn').toggleClass('btn-primary');
        unit = !unit;
        if (unit){
          $('#Temperture').html(Math.floor(city.main.temp-273) + '°C' );
        }
        else {
          $('#Temperture').html(Math.floor((city.main.temp * 9/5) - 459.67) + '°F' );
        }
        $('#Temperture').append("<img src = " + pngUrl + " height = 50 width = 50> ");
        }

      $(this).find('.btn').toggleClass('btn-default');
    });
    pngUrl += pngNum;
    console.log(pngUrl);
    $('body').css('background-image', 'url(' + backSel + ')');
    $("#City").html(city.name+ ', ' + city.sys.country);

    $('p').append(city.weather[0].description);
    $('p').capitalise();
    $('p').append('<br>');
    $('p').append("Humidity: " + city.main.humidity + '%' + '<br>');
    $('p').append("Wind Speed: " + city.wind.speed + "''" + '<br>');
  })
  .catch(function(error){
    console.log(error);
    $('body').css('background-image', 'url(' + backWall[0] + ')');
    $("#City").html('Auckland, NZ');

    $('p').append('light rain');
    $('p').capitalise();
    $('p').append('<br>');
    $('p').append("Humidity: 88 %" + '<br>');
    $('p').append("Wind Speed: 1'" + '<br>');
  });

  });
