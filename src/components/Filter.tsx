import './Filter.css';
import { useContext } from 'react';
import { DevicesContext } from '../DevicesContext';
import { DevicesContextType } from '../@types/devices.d';

export const Filter = () => {
  const { setFilter } = useContext(DevicesContext) as DevicesContextType;

    return (
        <select className='actions__filter' aria-label='Filter by product line' onChange={(e) => setFilter(e.target.value)}>
            <option value='all'>Filter</option>
            <option value='UniFi'>UniFi</option>
            <option value='UniFi LTE'>UniFi LTE</option>
            <option value='UniFi Protect'>UniFi Protect</option>
            <option value='UniFi Access'>UniFi Access</option>
            <option value='airMAX'>airMax</option>
            <option value='EdgeMax'>EdgeMax</option>
        </select>
    )
}