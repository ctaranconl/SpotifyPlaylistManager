
import download_gif from './img/spotify-gif.gif';

const ApplicationHeader = () => {
    return(
        <div id="app-title-text-container">
            <h1>Spotify Playlist Data Downloader</h1>
            <hr></hr>
            <p>This web application allows you to download data from a Spotify playlist and export it to CSV or XLSX.</p>
            <div style={{width: "100%", display: "flex"}}>
                <img id="gif" src={download_gif} alt="download-gif" />
            </div>
        </div>
    );
}

export default ApplicationHeader;