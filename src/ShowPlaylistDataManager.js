import {useState} from 'react';
import DownloadPlaylistInput from './DownloadPlaylistInput';
import Main from './Main';
import MainPageButtons from './MainPageButtons';

const ShowPlaylistDataManager = () => {
    const [action, setAction] = useState('');
    const handleMainButtons = (buttonType) => {
        if(buttonType === 'download'){
            setAction('download');
        }
    }
    return (<div>
        <MainPageButtons handleMainButtons = {handleMainButtons} />
        {action === 'download' && <DownloadPlaylistInput/>}
    </div>);
}

export default ShowPlaylistDataManager;