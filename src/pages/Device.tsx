import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { DevicesContextType } from "../@types/devices.d";
import { DevicesContext } from "../DevicesContext";
import backBtn from '../assets/back-btn.png';
import './Device.css';
import { DeviceProperties } from "../components/DeviceProperties";

export const Device = () => {
    const { productName } = useParams();
    const { devices } = useContext(DevicesContext) as DevicesContextType;
    const product = devices?.filter(device => device.product.name === productName)[0];

    return (
        <>
          <div className='device__toolbar--container'>
            <Link to='/' className="back__icon">
                <img src={backBtn} alt="back button"/>
            </Link>
            <h2 className="device__name">{product?.product.name}</h2>
          </div>
          <section className="device__descriptions--container">
                <div className="device__image--wrapper">
                    <img src={`https://static.ui.com/fingerprint/ui/icons/${product?.icon.id}_257x257.png`} alt={product?.product.name} />
                </div>
                <article>
                    <DeviceProperties  product={product}/>
                </article>
          </section>
        </>
    )
}