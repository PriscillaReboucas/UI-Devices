import './Header.css';
import logovector from '../assets/logo-vector.png';

export const Header = () => {
    return (
        <header className='header--container'>
            <div className='header__title--container'>
                <div className='logo--container'>
                    <img className='logo' src={logovector} alt='Ubiquiti logo'/>
                </div>
                <h1 className='header__title'>Devices</h1>
            </div>
            <div className='header__subtitle'>Developed by: Priscilla Rebouças</div>
        </header>
    )
}