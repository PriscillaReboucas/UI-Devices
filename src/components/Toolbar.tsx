import './Toolbar.css';
import listView from '../assets/listView.png';
import { Search } from './Search';
import { Filter } from './Filter';

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
                <Filter />
            </div>
        </div>
    )
}