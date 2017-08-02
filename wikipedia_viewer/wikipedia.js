$(document).ready(function() {
  $("#search_item").value = " ";
});

$("#search_item").keypress(function(event) {
  if (event.which == 13) {
    console.log("keypress");
    wikiRemoveResult();
    callWikiAPI();
  }
});

$("#go_search").on("click", function(event) {
  console.log("buttonpress");
  wikiRemoveResult();
  callWikiAPI();
});

function callWikiAPI() {
  const szKeyword = $("#search_item").val();
  const url =
    "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" +
    szKeyword +
    "&prop=info&inprop=url&utf8=&format=json&origin=*&sroffset=1&srlimit=20";

  fetch(url).then(response => response.json()).then(function(myData) {
    wikiDisplayResults(myData);
  });
}

function wikiDisplayResults(wikiResultData) {
  var szLink = "https://en.wikipedia.org/wiki/";
  for (var i = 0; i < 20; i++) {
    var szArticleLink = wikiResultData.query.search[i].title;
    szArticleLink = szArticleLink.replace(/ /g, "_");
    $("#search_results").append(
      '<div class="card"><div class="card-block"><h3 class="card-title">' +
        wikiResultData.query.search[i].title +
        '</h4><p class="card-text">' +
        wikiResultData.query.search[i].snippet +
        "...</p> <a href= " +
        szLink +
        szArticleLink +
        'class="card-link">Read on Wikipedia</a> ' +
        wikiResultData.query.search[i].wordcount +
        " words</div></div>"
    );
  }
}

function wikiRemoveResult() {
  for (var i = 0; i < 20; i++) {
    $(".card").remove();
  }
}
