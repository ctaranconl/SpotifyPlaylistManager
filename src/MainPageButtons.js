
const MainPageButtons = (props) => {
    return(
        <div id="main-page-buttons">
            <button onClick={() => props.handleMainButtons('download')}>DOWNLOAD PLAYLIST</button>
        </div>
    );
}

export default MainPageButtons;