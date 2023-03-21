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

const DownloadPlaylistInput = () => {
    const [inputValue, setInputValue] = useState('');
    
    
    const [playlistData, setPlaylistData] = useState([]);

    const handleClick = async () => {

        const spotifyApi = new SpotifyWebApi();
        const token = getClientCredentialsToken(spotifyApi);    
        spotifyApi.setAccessToken(token);
        
        const listUrl = inputValue;
        console.log("RESULT: " + listUrl)
        const playlistId = listUrl.split('/playlist/')[1].split('?')[0] || {};
        
        console.log("ID: "+playlistId)
        let allTracks = []
        const playlist = spotifyApi.getPlaylist(playlistId);
        
        /*const playlistName=playlist.name;
        allTracks = allTracks.concat(playlist.tracks.items);
        const numSongs = playlist.tracks.items.length;
        console.log("ID "+ numSongs);
        if (!playlist) {
            return <div>Loading...</div>;
        }
        return [allTracks, playlistName, numSongs];*/

        setPlaylistData(playlist.tracks);
      };
    
    /*const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const getComponentToRender = (param) => {
    // Call ComponentB, passing the parameter as a prop
    console.log(param);
        return (<>
            <PlaylistView playlistUrl={param} />
        </>);
    }
    
    const handleButtonClick = () => {
    // Call a function that returns a component, passing the inputValue as a prop
        const componentToRender = getComponentToRender(inputValue);
        // Render the component that was returned
        return componentToRender;
    };*/


    
    return(
        <div id="input-container">
            <h2 id="enter-playlist-url">Enter playlist URL https://open.spotify.com/playlist/0iHdjYXY0R0oDGUdgGxgrO?si=569b6b773bc648b6</h2>
            <input id="playlist-input" type="text" placeholder="Enter Playlist URL" value={inputValue} onChange={(event) => setInputValue(event.target.value)} ></input>
            <button id="retrieve-data-button" onClick={handleClick}>RETRIEVE DATA</button>
            {playlistData.length > 0 && <h2>BUONAS</h2>}
        </div>
    );
}

//{playlistData.length > 0 && <ShowPlaylistDataManager data={playlistData}/>}



export default DownloadPlaylistInput;