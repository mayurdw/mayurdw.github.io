
$(document).ready(function() {
    getStatus();
})

function getStatus(params) {
    var szClient_id = 'f8zbrjgdn03q5ylbjicjoktfxilvqo';
    var szTwitchEndpoint = 'https://api.twitch.tv/kraken/';
    var szFCC = 'freecodecamp';
    var szVersionHeader = 'application/vnd.twitchtv.v5+json';
    var szFCCUrl = szTwitchEndpoint + 'users?login=' + szFCC;
    var obMyHeaders = new Headers();
    obMyHeaders.append('Client-ID', szClient_id);
    obMyHeaders.append('Accept', szVersionHeader);
    var obMyGet = { 
        method: 'GET',
        headers: obMyHeaders,
        mode: 'cors',
        cache: 'default' 
    };
    
    fetch(szFCCUrl, obMyGet)
        .then(response => response.json())
        .then(function(JSONResponse) {
            szFCC = JSONResponse.users[0]._id;
            var szStreamUrl = szTwitchEndpoint + 'streams/' +   szFCC + '?client_id=' + szClient_id;
            fetch(szStreamUrl)
            .then(response => response.json())
            .then(function(stream){   
                //console.log( stream.stream );
                if ( stream.stream != null )
                {
                    $('#FCCStreaming').html("STREAMING!").css({'color':'green'});
                }
                else
                {
                    $('#FCCStreaming').html("OFFLINE!").css({'color':'red'});
                }
            })
        })
};