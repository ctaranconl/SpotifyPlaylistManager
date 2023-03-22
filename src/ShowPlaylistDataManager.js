import {useState} from 'react';
import DownloadPlaylistInput from './DownloadPlaylistInput';
import Main from './Main';
import MainPageButtons from './MainPageButtons';
import RenderPlaylistTable from './PlaylistTable';

const ShowPlaylistDataManager = () => {
    const [action, setAction] = useState(false);
    const [retrieveData, setRetrieveData] = useState('');
    const [playlistData, setPlaylistData] = useState([]);
    const handleMainButtons = (buttonType) => {
        if(buttonType === 'download'){
            setAction('download');
        }
    }


    return (<div>
        <MainPageButtons handleMainButtons = {handleMainButtons} />
        {action === 'download' && <DownloadPlaylistInput setPlaylistData = {setPlaylistData} setRetrieveData = {setRetrieveData}/>}
        {retrieveData && playlistData.tracks.items.length > 0 && <RenderPlaylistTable playlistTable = {playlistData} />}
    </div>);
}

export default ShowPlaylistDataManager;