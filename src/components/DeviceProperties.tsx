import { IDevices } from "../@types/devices.d";
import './DeviceProperties.css';

type Props = {
    product: IDevices;
};

export const DeviceProperties = ({product}:Props) => {
    return (
        <ul className="properties--container">
            <li className="properties--wrap">
                <h3>Product Line</h3>
                <p>{product.line.name}</p>
            </li>
            <li className="properties--wrap">
                <h3>ID</h3>
                <p>{product.line.id}</p>
            </li>
            <li className="properties--wrap">
                <h3>Name</h3>
                <p>{product.product.name}</p>
            </li>
            <li className="properties--wrap">
                <h3>Short name</h3>
                <p>{product.shortnames[0]}</p>
            </li>
            <li className="properties--wrap">
                <h3>Max. power</h3>
                <p>{'maxPower' in product? product.unifi.network.radios.na.maxPower + ' W ' : '-'}</p>
            </li>
            <li className="properties--wrap">
                <h3>Speed</h3>
                <p>{'maxSpeedMegabitsPerSecond' in product? product.unifi.network.radios.na.maxSpeedMegabitsPerSecond + 'Mbps' : '-'}</p>
            </li>
            <li className="properties--wrap">
                <h3>Number of ports</h3>
                <p>{'numberOfPorts' in product? product.unifi.network.numberOfPorts : '-'}</p>
            </li>
        </ul>
    )
}