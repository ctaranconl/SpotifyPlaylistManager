import './Main.css';

function Main() {
    return (
        <div class="content">
            <div class="mainPage">
                <ApplicationHeader />
                <ImportButton />
                <DownloadButton />
            </div>
            <PlaylistTable />
        </div>
    )
}

function ApplicationHeader(){
    return(
        <div id="app-title-text-container">
            <h1>Spotify Playlist Data Downloader</h1>
        </div>
    );
}

function ImportButton(){
    return(
        <div id="import-button-div">
            <button>IMPORT PLAYLIST</button>
        </div>
    );
}

function DownloadButton(){
    
    return(
        <div id="download-button-div">
            <button onClick={showSlideIn}>DOWNLOAD PLAYLIST</button>
        </div>
    );
}

function PlaylistTable(){
    return(
        <div class="tablePage">
            <h2 id="playlist-title">Playlist Title</h2>
            <h3 id="playlist-count">99 Songs</h3>
            <div id="table-container">
                <table id="playlist-table">
                <thead id='table-header'>   
                </thead>
                    <TableHeader/>
                <tbody>
                    
                </tbody>
                </table>
            </div>
            <div id="export-button-container">
                <button id="go-back-button" onClick={showSlideOut}><img id="go-back-icon" src="public/goback.svg" alt="Go back"></img></button>
                <button id="export-button" type="button" onclick="showSlideIn2()">Export</button>
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
            <th class="center-element"><img id="time-icon" src='icons/timeclock.png'></img></th>
        </tr>
    );
}

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
