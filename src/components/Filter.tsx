import './Filter.css';

export const Filter = () => {
    return (
        <select className='actions__filter' aria-label='Filter by product line'>
            <option value='all'>Filter</option>
            <option value='UniFi'>UniFi</option>
            <option value='UniFi LTE'>UniFi LTE</option>
            <option value='UniFi Protect'>UniFi Protect</option>
            <option value='UniFi Access'>UniFi Access</option>
            <option value='airMax'>airMax</option>
            <option value='EdgeMax'>EdgeMax</option>
        </select>
    )
}