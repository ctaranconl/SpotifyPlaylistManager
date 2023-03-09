import './Main.css';
import { downloadPlaylistData } from './playlist.js';

function Main() {
    return (
        <div className="content">
            <div className="mainPage">
                <ApplicationHeader />
                <ImportButton />
                <PlaylistInput />
            </div>
            <PlaylistTable />
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
    
    return(
        <div id="input-container">
            <h2 id="enter-playlist-url">Enter playlist URL</h2>
            <input id="playlist-input" type="text"></input>
            <button id="retrieve-data-button" onClick={downloadPlaylist}>RETRIEVE DATA</button>
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
                    <tr>
                        <td>1</td>
                        <td>Hightway to Hell</td>
                        <td>Highway to Hell</td>
                        <td>ACDC</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Hightway to Hell</td>
                        <td>Highway to Hell</td>
                        <td>ACDC</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Hightway to Hell</td>
                        <td>Highway to Hell</td>
                        <td>ACDC</td>
                    </tr>
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

async function downloadPlaylist() {
    const playlistUrl = document.getElementById("playlist-input").value;
    const songs = await downloadPlaylistData(playlistUrl);
    showSlideIn();
    console.log(songs[1]);
    /*updateTable(songs);*/
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

export default Main;
