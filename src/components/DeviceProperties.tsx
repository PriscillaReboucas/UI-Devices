import { IDevices } from "../@types/devices.d";
import './DeviceProperties.css';
import { PropertiesCard } from "./PropertiesCard";

type Props = {
    product: IDevices;
};

export const DeviceProperties = ({product}:Props) => {
    return (
    <ul className="properties--container">
        <PropertiesCard title='Product Line'  name={product.line.name}/>
        <PropertiesCard title='ID'  name={product.line.id}/>
        <PropertiesCard title='Name'  name={product.product.name}/>
        <PropertiesCard title='Short name'  name={product.shortnames[0]}/>
        <PropertiesCard title='Max. Power'  name={'maxPower' in product? product.unifi.network.radios.na.maxPower + ' W ' : '-'}/>
        <PropertiesCard title='Speed'  name={'maxSpeedMegabitsPerSecond' in product? product.unifi.network.radios.na.maxSpeedMegabitsPerSecond + 'Mbps' : '-'}/>
        <PropertiesCard title='Number of ports'  name={'numberOfPorts' in product? product.unifi.network.numberOfPorts : '-'}/>
    </ul>
    )
}