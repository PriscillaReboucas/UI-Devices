import './Toolbar.css';
import listView from '../assets/listView.png';
import { Search } from './Search';

export const Toolbar = () => {
    return (
        <div className='toolbar--container'>
            <Search />
            <div className='toolbar__actions--container'>
                <div className='actions__listView--wrap'>
                    <img className='actions__listView' src={listView} alt='list view'/>
                </div>
                <div className='actions__gridView--container'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <select className='actions__filter'>
                    <option value='all'>Filter</option>
                    <option value='UniFi'>UniFi</option>
                    <option value='UniFi LTE'>UniFi LTE</option>
                    <option value='UniFi Protect'>UniFi Protect</option>
                    <option value='UniFi Access'>UniFi Access</option>
                    <option value='airMax'>airMax</option>
                    <option value='EdgeMax'>EdgeMax</option>
                </select>
            </div>
        </div>
    )
}