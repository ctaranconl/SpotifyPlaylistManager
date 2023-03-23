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
              <th>TITLE</th>
              <th>ALBUM</th>
              <th>DURATION</th>
            </tr>
          </thead>
          <tbody>
            {props.playlistTable.tracks.items.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.track.name}</td>
                  <td>{item.track.artists[0].name}</td>
                  <td>{item.track.album.name}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RenderPlaylistTable;
