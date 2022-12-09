import './Toolbar.css';
import { Search } from './Search';
import { Filter } from './Filter';
import { ListView } from './ListView';
import { GridView } from './GridView';

export const Toolbar = () => {
    return (
        <div className='toolbar--container'>
            <Search />
            <div className='toolbar__actions--container'>
                <ListView />
                <GridView />
                <Filter />
            </div>
        </div>
    )
}