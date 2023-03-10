import SpotifyWebApi from 'spotify-web-api-js';
import PlaylistTable from './PlaylistTable';

async function PlaylistView(playlistUrl) {
    
    console.log("INPUT " + playlistUrl);
    /*const spotifyApi = new SpotifyWebApi();
    const token = await getClientCredentialsToken(spotifyApi);    
    spotifyApi.setAccessToken(token);
    const listUrl = playlistUrl.playlistUrl;
    console.log("RESULT: " + listUrl)
    const playlistId = listUrl.split('/playlist/')[1].split('?')[0] || {};
    
    console.log("ID   "+playlistId)
    let allTracks = []
    const response = await spotifyApi.getPlaylist(playlistId);
    
    const playlistName=response.name;
    allTracks = allTracks.concat(response.tracks.items);
    const numSongs = response.tracks.items.length;
    console.log("ID "+ numSongs);
    if (!response) {
        return <div>Loading...</div>;
    }
    return (
        <div>
          <h1>{response.name}</h1>
          <PlaylistTable playlist={response} />
        </div>
    );

    return [allTracks, playlistName, numSongs];*/

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

export default PlaylistView;