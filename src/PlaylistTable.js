import React from 'react';

function PlaylistTable({ playlist }) {
  return (
    <table>
      <thead>
        <tr>
          <th>TITLE</th>
          <th>ALBUM</th>
          <th>DURATION</th>
        </tr>
      </thead>
      <tbody>
        {playlist.tracks.items.map((item, index) => (
            <tr key={index}>
            <td>{item.track.name}</td>
            <td>{item.track.artists[0].name}</td>
            <td>{item.track.album.name}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlaylistTable;
