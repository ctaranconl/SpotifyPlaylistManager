import React, { useState,useEffect } from 'react';
import XLSX from 'sheetjs-style';


const ExportSelector = (props) => {

  const [format, setFormat] = useState('csv');
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = [['Track Name', 'Artist', 'Album', 'Duration', 'Image Link']];
    props.playlistData.tracks.items.forEach((item) => {
      const track = item.track;
      const name = track.name;
      const artist = track.artists[0].name;
      const album = track.album.name;
      const image = track.album.images[0].url;
      const duration = Math.floor(item.track.duration_ms / 60000) + ":" + Math.floor((item.track.duration_ms % 60000) / 1000);
      data.push([name, artist, album, duration, image]);
    });
    setData(data);
  }, [props.playlistData]);

  const handleDownload = () => {
    if (format === 'csv') {
      //Encoding CSV String with data:text/csv;charset=utf-8
      const csvContent = 'data:text/csv;charset=utf-8,' + data.map(row => row.join(';')).join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', props.playlistData.name + ' - [Spotify Playlist].csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (format === 'xlsx') {
      const workbook = XLSX.utils.book_new();
      const sheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, sheet, props.playlistData.name);
      XLSX.writeFile(workbook, props.playlistData.name + ' - [Spotify Playlist].xlsx');
    }
  };

  
  return (
    <div id="download-selector">
      <select id="format-select" value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="">Select an option...</option>
        <option value="csv">CSV</option>
        <option value="xlsx">XLSX</option>
      </select>
      <button id="dw-button" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
}
/*<td>{item.track.name}</td>*/
export default ExportSelector;
