import './DevicesList.css';
import { IDevices } from '../@types/devices.d';

type Props = {
    devices: IDevices[];
};

export const DevicesList = ({devices}:Props) => {
    return (
        <h2>Devices list</h2>
    )
}