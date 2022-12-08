import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { DevicesContextType } from "../@types/devices.d";
import { DevicesContext } from "../DevicesContext";
import backBtn from '../assets/back-btn.png';
import './Device.css';

export const Device = () => {
    const { productName } = useParams();
    const { devices } = useContext(DevicesContext) as DevicesContextType;

    const product = devices?.filter(device => device.product.name === productName)[0]

    return (
        <>
          <div className='device__toolbar--container'>
            <Link to='/'>
                <img src={backBtn} alt="back button"/>
            </Link>
            <h2 className="device__name">{product?.product.name}</h2>
          </div>
          <section>
            <article>
                <img src={`https://static.ui.com/fingerprint/ui/icons/${product?.icon.id}_257x257.png`} alt={product?.product.name} />
                <ul>
                    <li>
                        <h3>Product Line</h3>
                        <p>{product?.line.name}</p>
                    </li>
                    <li>
                        <h3>ID</h3>
                        <p>{product?.line.id}</p>
                    </li>
                    <li>
                        <h3>Name</h3>
                        <p>{product?.product.name}</p>
                    </li>
                    <li>
                        <h3>Short name</h3>
                        <p>{product.shortnames[0]}</p>
                    </li>
                    <li>
                        <h3>Max. power</h3>
                        <p>{product.unifi? product.unifi.network.radios.na.maxPower + ' W ' : '-'}</p>
                    </li>
                    <li>
                        <h3>Speed</h3>
                        <p>{product.unifi? product.unifi.network.radios.na.maxSpeedMegabitsPerSecond + 'Mbps' : '-'}</p>
                    </li>
                    <li>
                        <h3>Number of ports</h3>
                        <p>{product.unifi? product.unifi.network.numberOfPorts : '-'}</p>
                    </li>
                </ul>
            </article>
          </section>
        </>
    )
}