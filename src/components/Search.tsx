import searchIcon from '../assets/search.png';
import close from '../assets/close.png';
import './Search.css';
import { useContext } from "react";
import { DevicesContext } from "../DevicesContext";
import { DevicesContextType } from '../@types/devices.d';

export const Search = () => {
    const { search, setSearch } = useContext(DevicesContext) as DevicesContextType;

    return (
    <div className='search--container'>
        <div className='search__icon--container'>
            <div className='search__icon--wrap'>
                <img className='search__icon' src={searchIcon} alt='search icon'/>
            </div>
        </div>
        <input className='search__input' type='text' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <img className='close__input' src={close} alt='close search' onClick={() => setSearch('')}/>
    </div>
    )
}