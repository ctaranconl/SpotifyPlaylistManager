
const MainPageButtons = (props) => {
    return(
        <div id="main-page-buttons">
            <button onClick={() => props.handleMainButtons('download')}>DOWNLOAD PLAYLIST</button>  
            <button onClick={() => props.handleMainButtons('import')}>IMPORT PLAYLIST</button>
        </div>
    );
}

export default MainPageButtons;