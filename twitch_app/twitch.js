var CLIENT_ID = 'f8zbrjgdn03q5ylbjicjoktfxilvqo';
var TWITCH = 'https://api.twitch.tv/kraken/';
var FCC = 'freecodecamp';

//curl - H 'Accept: application/vnd.twitchtv.v5+json' - H 'Client-ID: f8zbrjgdn03q5ylbjicjoktfxilvqo' - X GET 'https://api.twitch.tv/kraken/users?login=freecodecamp'

//'https://dev.twitch.tv/docs/v5/reference/streams/#get-stream-by-user'

$(document).ready(function() {
    getStatus();
})

function getStatus(params) {
    var FullLink = TWITCH + '?client_id=' + CLIENT_ID + 'users?login=' + FCC;

    fetch(FullLink)
        .then(response => response.json())
        .then(function(city) {
            console.log(city);
        })
};