import listView from '../assets/listView.png';
import './ListView.css';
import { useContext } from 'react';
import { DevicesContext } from '../DevicesContext';
import { DevicesContextType } from '../@types/devices.d';

export const ListView = () => {
    const { setView } = useContext(DevicesContext) as DevicesContextType;

    return (
        <div className='actions__listView--wrap' onClick={() => setView('list')}>
            <img className='actions__listView' src={listView} alt='list view'/>
        </div>
    )
}