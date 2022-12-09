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
            <h2>Devices total</h2>
            <h2>PRODUCT LINE</h2>
            <h2>NAME</h2>
        </section>
        <section>
        {devices &&
                devices.map((device: IDevices) => {
                    return (<article key={device.model_id}>
                                <DeviceLine device={device} />
                            </article>
                    );
                })}
        </section>
    </section>
    )
}