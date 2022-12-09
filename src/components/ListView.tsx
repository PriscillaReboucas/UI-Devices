import listView from '../assets/listView.png';
import './ListView.css';

export const ListView = () => {
    return (
        <div className='actions__listView--wrap'>
            <img className='actions__listView' src={listView} alt='list view'/>
        </div>
    )
}