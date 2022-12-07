import './Toolbar.css';
import search from '../assets/search.png';
import close from '../assets/close.png';

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
                <div className='toolbar__gridView--container'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}