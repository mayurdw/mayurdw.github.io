var szClient_id;

$( document ).ready( function() {
    getStatus();
})

function getStatus( ) {

    if ( szClient_id == null )
    {
        $( '#FCCStreaming' ).html( "STREAMING!" ).css( { 'color':'green' } );
    }
    else{
        var szTwitchEndpoint = 'https://api.twitch.tv/kraken/';
        var szFCC = 'freecodecamp';
        var szVersionHeader = 'application/vnd.twitchtv.v5+json';
        var szFCCUrl = szTwitchEndpoint + 'users?login=' + szFCC;
        var obMyHeaders = new Headers();
        obMyHeaders.append( 'Client-ID', szClient_id );
        obMyHeaders.append( 'Accept', szVersionHeader );
        var obMyGet = { 
            method: 'GET',
            headers: obMyHeaders,
            mode: 'cors',
            cache: 'default' 
        };
        
        //first call for FCC status
        fetch( szFCCUrl, obMyGet )
        .then( response => response.json() )
        .then( function( JSONResponse ) {
            szFCC = JSONResponse.users[0]._id;
            var szStreamUrl = szTwitchEndpoint + 'streams/' +   szFCC + '?client_id=' + szClient_id;
            fetch( szStreamUrl )
            .then( response => response.json() )
            .then( function( stream ){
                if ( stream.stream != null )
                {
                    $( '#FCCStreaming' ).html( "STREAMING!" ).css( { 'color':'green' } );
                }
                else
                {
                    $( '#FCCStreaming' ).html( "OFFLINE!" ).css( { 'color':'red' } );
                }
            })
            .catch(function( err ){
                console.log( err );
            })
        })
        .catch(function(err){
            console.log( err );
        })
    }
};
