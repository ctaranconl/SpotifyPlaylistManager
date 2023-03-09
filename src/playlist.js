import SpotifyWebApi from 'spotify-web-api-js';

export async function downloadPlaylistData(playlistUrl) {
    const spotifyApi = new SpotifyWebApi();


    const token = await getClientCredentialsToken(spotifyApi);
    
    console.log("TOKEN: "+token)
    spotifyApi.setAccessToken(token);
    
    const playlistId = playlistUrl.split('/playlist/')[1].split('?')[0];
    
    /*try {
        // Authenticate with Spotify
        // You can do this by obtaining an access token using Spotify's authorization flow
        // See https://developer.spotify.com/documentation/general/guides/authorization-guide/ for more info
        // Once you have the access token, set it as the authorization header in the SpotifyWebApi object:
        // spotifyApi.setAccessToken(yourAccessToken);
    
        // Get playlist data from Spotify
        const { body: playlist } = await spotifyApi.getPlaylist(playlistId);
        console.log("BASTAAAxDDD");
        // Extract song data from playlist tracks
        const tracks = playlist.tracks.items.map(item => ({
          id: item.track.id,
          name: item.track.name,
          album: item.track.album.name,
          albumImage: item.track.album.images[0].url,
          artists: item.track.artists.map(artist => artist.name),
          duration: item.track.duration_ms
        }));
    
        // Return playlist data
        return {
          name: playlist.name,
          id: playlist.id,
          tracks
        };
    } catch (err) {
        console.error('Error downloading playlist data', err);
        return null;
    }*/

    let allTracks = []
    const response = await spotifyApi.getPlaylist(playlistId);

    const playlistName=response.name;
    allTracks = allTracks.concat(response.tracks.items);
    const numSongs = response.tracks.items.length;

    return [allTracks, playlistName, numSongs];
    /*const SpotifyWebApi = require('spotify-web-api-node');
    const spotifyApi = new SpotifyWebApi({
        clientId: '1e5dd61308534114a7bfc0b649fa569a',
        clientSecret: '1829d37152904ffeacba298185a00da4'
    });

    await spotifyApi.clientCredentialsGrant().then(
        function(data) {
        console.log('The access token is ' + data.body['access_token']);
        // Save the access token to the SpotifyWebApi object
        spotifyApi.setAccessToken(data.body['access_token']);
        },
        function(err) {
        console.log('Something went wrong!', err);
        }
    );
    let allTracks = [];
    let offset = 0;
    let limit = 100;
    let playlistName = "";

    while (true) {
        const response = await spotifyApi.getPlaylist(
            playlistId,
            { 'offset': offset, 'limit': limit, 'fields': 'name,tracks.items(track(name, id, artists(name),album(name),album(images), duration_ms))' }
        );
        allTracks = allTracks.concat(response.body.tracks.items);
        console.log(response.body.tracks.items.length)
        if (response.body.tracks.items.length < limit) {
            playlistName = response.body.name;
            break;
        } else {
            offset += limit;
            console.log(offset)
        }
    }

    return [allTracks, playlistName];*/

}

async function getClientCredentialsToken(spotifyApi){
    const clientId = '1e5dd61308534114a7bfc0b649fa569a';
    const clientSecret = '1829d37152904ffeacba298185a00da4';
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`
        },
        body: 'grant_type=client_credentials'
        });
        const { access_token: accessToken } = await response.json();
        return accessToken;
    } catch (err) {
        console.error('Error getting client credentials access token', err);
        return null;
    }
}