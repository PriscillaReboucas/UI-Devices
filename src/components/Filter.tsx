import './Filter.css';
import { useContext } from 'react';
import { DevicesContext } from '../DevicesContext';
import { DevicesContextType } from '../@types/devices.d';
import close from '../assets/close.png';

export const Filter = () => {
  const { filter, setFilter, toggleFilter, setToggleFilter, devices } = useContext(DevicesContext) as DevicesContextType;

  const productLines = devices?.map (device =>  device.line.name);
  const uniqueProductLines = [...new Set(productLines)];
  
    return (
        <>
            <div onClick={() => setToggleFilter(!toggleFilter)} className='filter__name'>Filter</div>
            <div className={`modal__filter--container ${toggleFilter? 'active' : 'hidden'}`}>
                <div className='modal__header--wrapper'>
                    <p className='modal__header__title'>Filter</p>
                    <div className='modal__btn--close'>
                        <img src={close} alt="close filter" onClick={() => setToggleFilter(!toggleFilter)}/>
                    </div>
                </div>
                <div className='modal__main--container'>
                    <h3 className='modal__title'>Product Line</h3>
                    {uniqueProductLines.map(product => {
                        return (
                            <div key={product}>
                                <input type='checkbox'/>
                                <label>{product}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

{/* <select className='actions__filter' aria-label='Filter by product line'
onChange={(e) => setFilter(e.target.value)} value={filter}>
    <option value='all'>Filter</option>
    <option className='filter__title' disabled>Product Line</option>
    <option value='UniFi'>UniFi</option>
    <option value='UniFi LTE'>UniFi LTE</option>
    <option value='UniFi Protect'>UniFi Protect</option>
    <option value='UniFi Access'>UniFi Access</option>
    <option value='airMAX'>airMax</option>
    <option value='EdgeMax'>EdgeMax</option>
</select> */}