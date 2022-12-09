import './GridView.css';
import { useContext } from 'react';
import { DevicesContext } from '../DevicesContext';
import { DevicesContextType } from '../@types/devices.d';

export const GridView = () => {
  const { setView } = useContext(DevicesContext) as DevicesContextType;

    return (
        <div className='actions__gridView--container' onClick={() => setView('grid')}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}