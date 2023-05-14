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
        spotifyApi.setAccessToken(token);
        
        
        const spotifyRegex = /^(https:\/\/open\.spotify\.com\/(track|album|playlist|artist)\/[a-zA-Z0-9]+(\?si=[a-zA-Z0-9]+)?)$/;
        if (!spotifyRegex.test(inputValue)) {
            alert('Please enter a valid Spotify URL');
            return;
        }

        const title_content = document.getElementById('app-title-text-container');
        const title_buttons = document.getElementById('main-page-buttons');
        const input_content = document.getElementById('input-container');
        title_content.classList.add('title_hide');
        title_buttons.classList.add('title_buttons_hide');
        input_content.classList.add('input_hide');
        
        const listUrl = inputValue;
        const playlistId = listUrl.split('/playlist/')[1].split('?')[0] || {};
        
        const playlist = await spotifyApi.getPlaylist(playlistId);

        props.setPlaylistData(playlist);
        props.setRetrieveData(true);
      };
    

    return(
        <div id="input-container">
            <h2 id="enter-playlist-url">Enter playlist URL</h2>
            <input id="playlist-input" type="text" placeholder="Enter Playlist URL" value={inputValue} onChange={(event) => setInputValue(event.target.value)} ></input>
            <button id="retrieve-data-button" onClick={handleClick}>RETRIEVE DATA</button>
        </div>
    );
}

export default DownloadPlaylistInput;