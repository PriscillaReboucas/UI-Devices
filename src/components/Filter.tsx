import './Filter.css';
import { useContext } from 'react';
import { DevicesContext } from '../DevicesContext';
import { DevicesContextType } from '../@types/devices.d';
import close from '../assets/close.png';
import { Checkbox } from './Checkbox';

export const Filter = () => {
  const { selected, toggleFilter, setToggleFilter, devices } = useContext(DevicesContext) as DevicesContextType;

  const productLines = devices?.map (device =>  device.line.name);
  const uniqueProductLines = [...new Set(productLines)];

    return (
        <>
            <div onClick={() => setToggleFilter(!toggleFilter)} 
            className={`filter__name ${selected.length > 0? 'color--active': ''}`}>Filter</div>
            <div className={`modal__filter--container ${toggleFilter? 'active' : 'hidden'}`}>
                <div className='modal__header--wrapper'>
                    <p className='modal__header__title'>Filter</p>
                    <div className='modal__btn--close'>
                        <img src={close} alt="close filter" onClick={() => setToggleFilter(!toggleFilter)}/>
                    </div>
                </div>
                <div className='modal__main--container'>
                    <h3 className='modal__main__title'>Product Line</h3>
                    {uniqueProductLines.map(product => {
                        return (
                            <div key={product} className='modal__checkbox--container'>
                                <Checkbox product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

