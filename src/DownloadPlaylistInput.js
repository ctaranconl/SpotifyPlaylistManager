import { useState } from 'react';
//import PlaylistView from './PlaylistView.js';
import SpotifyWebApi from 'spotify-web-api-js';


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

const DownloadPlaylistInput = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleClick = async () => {

        const spotifyApi = new SpotifyWebApi();
        const token = await getClientCredentialsToken(spotifyApi);
        console.log("TOKEN: " + token);
        spotifyApi.setAccessToken(token);
        
        const listUrl = inputValue;
        console.log("RESULT: " + listUrl)
        const playlistId = listUrl.split('/playlist/')[1].split('?')[0] || {};
        
        console.log("ID: "+playlistId)
        
        const playlist = await spotifyApi.getPlaylist(playlistId);
        
        const playlistName=playlist.name
        
        console.log("Nombre playlist: " + playlistName);

        props.setPlaylistData(playlist);
        props.setRetrieveData(true);
      };
    

    return(
        <div id="input-container">
            <h2 id="enter-playlist-url">Enter playlist URL https://open.spotify.com/playlist/0iHdjYXY0R0oDGUdgGxgrO?si=569b6b773bc648b6</h2>
            <input id="playlist-input" type="text" placeholder="Enter Playlist URL" value={inputValue} onChange={(event) => setInputValue(event.target.value)} ></input>
            <button id="retrieve-data-button" onClick={handleClick}>RETRIEVE DATA</button>
        </div>
    );
}

export default DownloadPlaylistInput;