import './GridView.css';
import { useContext } from 'react';
import { DevicesContext } from '../DevicesContext';
import { DevicesContextType } from '../@types/devices.d';
import union from '../assets/Union.png'

export const GridView = () => {
  const { setView } = useContext(DevicesContext) as DevicesContextType;

    return (
        <div className='actions__gridView--container' onClick={() => setView('grid')}>
            <img className='gridview__image' src={union} alt="grid icon" />
        </div>
    )
}   