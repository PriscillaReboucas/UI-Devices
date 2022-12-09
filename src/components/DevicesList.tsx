import './DevicesList.css';
import { IDevices } from '../@types/devices.d';
import { DeviceLine } from './DeviceLine';

type Props = {
    devices: IDevices[];
};

export const DevicesList = ({devices}:Props) => {
    return (
    <section className='devicesList--container'>
        <section className='devicesList__titles--container'>
            <h2 className='title title__small'>123 devices</h2>
            <h2 className='title title__big'>Product Line</h2>
            <h2 className='title title__big'>Name</h2>
        </section>
        <section className='devicesList__products--container'>
        {devices && devices.map((device: IDevices) => {
            return (<article className='products--container' key={device.model_id}>
                        <DeviceLine device={device} />
                    </article>
            );
        })}
        </section>
    </section>
    )
}