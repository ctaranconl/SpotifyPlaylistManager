/*
import './Main.css';
import PlaylistView from './PlaylistView.js';
import React, { useState } from 'react';
function Main() {
    return (
        <div className="content">
            <div className="mainPage">
                <ApplicationHeader />
                <ImportButton />
                <PlaylistInput />
            </div>
            
        </div>
    )
}

function ApplicationHeader(){
    return(
        <div id="app-title-text-container">
            <h1>Spotify Playlist Data Downloader</h1>
            <hr></hr>
            <p>This web application allows you to download data from a Spotify playlist and export it to various file formats, as well as import a file with playlist data directly to your spotify account.</p>
        </div>
    );
}

function ImportButton(){
    return(
        <div id="main-page-buttons">
            <button onClick={showInput}>DOWNLOAD PLAYLIST</button>  
            <button>IMPORT PLAYLIST</button>
        </div>
    );
}

function PlaylistInput(){

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const getComponentToRender = (param) => {
        return <PlaylistView playlistUrl={param} />;
    }
    
    const handleButtonClick = () => {
    // Call a function that returns a component, passing the inputValue as a prop
        const componentToRender = getComponentToRender(inputValue);
        // Render the component that was returned
        return componentToRender;
    };


    
    return(
        <div id="input-container">
            <h2 id="enter-playlist-url">Enter playlist URL https://open.spotify.com/playlist/0iHdjYXY0R0oDGUdgGxgrO?si=569b6b773bc648b6</h2>
            <input id="playlist-input" type="text" value={inputValue} onChange={handleInputChange} ></input>
            <button id="retrieve-data-button" onClick={handleButtonClick}>RETRIEVE DATA</button>
        </div>
    );
}

function PlaylistTable(){
    return(
        <div className="tablePage">
            <div id="table-page-title-container">
                <h2 id="playlist-title">Playlist Title</h2>
                <h3 id="playlist-count">99 Songs</h3>
            </div>
            <div id="table-container">
                <table id="playlist-table">
                    <thead id='table-header'>  
                        <TableHeader/> 
                    </thead>
                        
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div id="go-back-button-container">
                <button id="go-back-button" onClick={showSlideOut}><img id="go-back-icon" src="public/goback.svg" alt="Go back"></img></button>
            </div>
            <div id="export-button-container">
                <button id="export-button" type="button" >Export</button>
            </div>
        </div>
    );
}

function TableHeader(){
    return(
        <tr>
            <th>#</th>
            <th>TITLE</th>
            <th>ALBUM</th>
            <th className="center-element"><img id="time-icon" src='icons/timeclock.png'></img></th>
        </tr>
    );
}

function showInput(){
    document.getElementById("input-container").style.display = "block";
}

function DownloadPlaylist(url) {
    const playlistUrl = document.getElementById("playlist-input").value;
    const songs = await PlaylistView(playlistUrl);
    showSlideIn();
    console.log(songs[1]);
    updateTable(songs);
    
    return(
        <div>
            <PlaylistView playlistUrl={url} />
        </div>
    );

};

function showSlideIn() {
    const slideIn = document.querySelector('.mainPage');
    const slideIn2 = document.querySelector('.tablePage');
    slideIn.classList.add('show');
    slideIn2.classList.add('show');
}

function showSlideOut() {
    const slideIn = document.querySelector('.mainPage');
    const slideIn2 = document.querySelector('.tablePage');
    slideIn.classList.remove('show');
    slideIn2.classList.remove('show');
}

function updateTable(songs) {
    
    const playlistTable = document.getElementById('playlist-table');
    const playlistName = songs[1];
    document.getElementById("playlist-title").innerHTML = playlistName;
    document.getElementById("playlist-count").innerHTML = songs[0].length + " songs";
    songs[0].forEach((track, index) => {

        const albumImageUrl = track.track.album.images[0].url || 'album.jpg';
        //console.log(albumImageUrl)
        //const albumImageUrl = track.album || 'album.jpg';
        
        const songTitle = track.track.name;
        const songAlbum = track.track.album.name;
        const artistName = track.track.artists[0].name;
        const duration = msToMinutes(track.track.duration_ms);

        const row = document.createElement('tr');
        row.setAttribute("id", "table-row")
        const indexCell = document.createElement('td');
        //indexCell.setAttribute("className", "center-element");
        const title = document.createElement('td');
        const album = document.createElement('td');
        const songDuration = document.createElement('td');
        //songDuration.setAttribute("class", "center-element");

        let song_artist_cell = 
                
                    <div id="row-title-container">
                        <div id="album-list-images">
                            <img src={albumImageUrl}></img>
                        </div>
                        <div>
                            <p id="song-title-text">{songTitle}</p>
                            <p id="artist-text">{artistName}</p>
                        </div>
                    </div>              
        ;

        indexCell.innerText = index + 1
        title.innerHTML = song_artist_cell;
        //artist.innerText = track.track.artists.map(artist => artist.name).join(', ');
        album.innerText = songAlbum;
        let minutesDecimal = (duration/1000)/60;
        let minutes = minutesDecimal;
        songDuration.innerHTML = duration;

        row.appendChild(indexCell);
        row.appendChild(title);
        row.appendChild(album);
        row.appendChild(songDuration);

        playlistTable.appendChild(row);
    });

}

function msToMinutes(ms) {
    const minutes = Math.floor(ms / 60000); // divide milliseconds by 60000 to get minutes
    const seconds = Math.floor((ms % 60000) / 1000); // get the remaining seconds
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // return the result as a formatted string
}

export default Main;
*/