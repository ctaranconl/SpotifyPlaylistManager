import React from 'react';

const RenderPlaylistTable = (props) => {

  return (
    <div className="tablePage">
      <h2 id="playlist-title">{props.playlistTable.name}</h2>
      <h3 id="playlist-count">{props.playlistTable.tracks.items.length} Songs</h3>
      <div id="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th style={{width: "500px"}}>TITLE</th>
              <th>ALBUM</th>
              <th>DURATION</th>
            </tr>
          </thead>
          <tbody>
            {props.playlistTable.tracks.items.map((item, index) => (
                <tr id="table-row" key={index}>
                  <td id="index">{index + 1}</td>
                  <div id="row-title-container">
                    <div id="album-list-images">
                      <img src={item.track.album.images[0].url} alt="Album" />
                    </div>
                    <div>
                      <p id="song-title-text">{item.track.name}</p>
                      <p id="artist-text">{item.track.artists[0].name}</p>
                    </div>
                  </div>
                  <td>{item.track.album.name}</td>
                  <td id="song-duration">{Math.floor(item.track.duration_ms / 60000)}:
                      {Math.floor((item.track.duration_ms % 60000) / 1000)
                        .toString()
                        .padStart(2, '0')}
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
/*<td>{item.track.name}</td>*/
export default RenderPlaylistTable;
