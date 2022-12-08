import './Toolbar.css';
import search from '../assets/search.png';
import close from '../assets/close.png';
import listView from '../assets/listView.png';

export const Toolbar = () => {
    return (
        <div className='toolbar--container'>
            <div className='toolbar__search--container'>
                <div className='search__icon--container'>
                    <div className='search__icon--wrap'>
                        <img className='search__icon' src={search} alt='search icon'/>
                    </div>
                </div>
                <input className='search__input' type='text' placeholder='Search'/>
                <img className='close__input' src={close} alt='close search'/>
            </div>
            <div className='toolbar__actions--container'>
                <img className='actions__listView' src={listView} alt='list view'/>
                <div className='actions__gridView--container'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <label>
                    <h3>Filter</h3>
                    <select className='actions__filter'>
                        <option value='UniFi'>UniFi</option>
                        <option value='UniFi LTE'>UniFi LTE</option>
                        <option value='UniFi Protect'>UniFi Protect</option>
                        <option value='UniFi Access'>UniFi Access</option>
                        <option value='airMax'>airMax</option>
                        <option value='EdgeMax'>EdgeMax</option>
                    </select>
                </label>
            </div>
        </div>
    )
}