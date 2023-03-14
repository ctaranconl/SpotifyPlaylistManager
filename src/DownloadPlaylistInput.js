import { useState } from 'react';

const DownloadPlaylistInput = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const getComponentToRender = (param) => {
    // Call ComponentB, passing the parameter as a prop
        // return <PlaylistView playlistUrl={param} />;
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