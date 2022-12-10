import './DevicesList.css';
import { IDevices } from '../@types/devices.d';
import { Link } from 'react-router-dom';

type Props = {
    devices: IDevices[];
};

export const DevicesList = ({devices}:Props) => {
    return (
    <section className='devicesList--container'>
        <article className='devicesList--wrapper'>
            <p className='title title__description'>{devices.length} devices</p>
            <h2 className='title title__line'>Product Line</h2>
            <h2 className='title title__name'>Name</h2>
        </article>
        {devices && devices.map((device: IDevices) => {
            return (
        <Link className='devicesList--wrapper action'  
        key={device.model_id}
        to={`/devices/${device.product.name}`}
        >
            <div className='devicesList__image--container'>
                <img className='devicesList__image' src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_25x25.png`} alt={device.product.name} />
            </div>
            <p className="title line__text--title">{device.line.name}</p>
            <p className="title line__text--subtitle">{device.product.name}</p>
        </Link>
            );
        })}

    </section>
    )
}