import search from '../assets/search.png';
import close from '../assets/close.png';
import './Search.css';

export const Search = () => {
    return (
    <div className='search--container'>
        <div className='search__icon--container'>
            <div className='search__icon--wrap'>
                <img className='search__icon' src={search} alt='search icon'/>
            </div>
        </div>
        <input className='search__input' type='text' placeholder='Search'/>
        <img className='close__input' src={close} alt='close search'/>
    </div>
    )
}