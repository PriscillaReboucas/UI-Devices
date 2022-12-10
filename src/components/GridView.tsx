import './GridView.css';
import { useContext } from 'react';
import { DevicesContext } from '../DevicesContext';
import { DevicesContextType } from '../@types/devices.d';

export const GridView = () => {
  const { view, setView } = useContext(DevicesContext) as DevicesContextType;

    return (
        <div className={`grid__icon--container ${view === 'grid'? 'grid--selected' : ''}`} onClick={() => setView('grid')}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}   

