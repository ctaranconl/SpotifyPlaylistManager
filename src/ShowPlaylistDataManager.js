import {useState} from 'react';
import DownloadPlaylistInput from './DownloadPlaylistInput';
import Main from './Main';
import MainPageButtons from './MainPageButtons';

const ShowPlaylistDataManager = () => {
    const [action, setAction] = useState('');
    const handleMainButtons = (buttonType) => {
        console.log('EXEC: ' + buttonType)
        // TODO: Crate manager funtion
        if(buttonType === 'download'){
            
        }
    }
    return (<>
        <MainPageButtons handleMainButtons = {handleMainButtons} />
        {action && <>pato</>}
    </>);
}

export default ShowPlaylistDataManager;