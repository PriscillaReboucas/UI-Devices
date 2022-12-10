import listView from '../assets/listView.png';
import './ListView.css';
import { useContext } from 'react';
import { DevicesContext } from '../DevicesContext';
import { DevicesContextType } from '../@types/devices.d';

export const ListView = () => {
    const { view, setView } = useContext(DevicesContext) as DevicesContextType;

    return (
        <div className={`actions__list--container ${view === 'list'? 'list--selected': ''}`} onClick={() => setView('list')}>
            <span className='list__icon--circle'></span>
            <span className='list__icon--line'></span>
            <span className='list__icon--circle'></span>
            <span className='list__icon--line'></span>
            <span className='list__icon--circle'></span>
            <span className='list__icon--line'></span>
        </div>
    )
}


{/* <img className='actions__listView' src={listView} alt='list view'/> */}