import background from '.././assets/background.png';
import { Link } from "react-router-dom";
import { IDevices } from ".././@types/devices.d";

type Props = {
    devices:  IDevices[]
}

export const CardList = ({devices}:Props) => {
    return (<section className='gridView--container'>
         {devices && devices.map((device: IDevices) =>  {
                return (
                    <Link to={`/devices/${device.product.name}`} key={device.model_id}>
                        <img src={background} alt={device.product.name}/>
                        <p>{device.line.name}</p>
                        <p>{device.product.name}</p>    
                    </Link>
                )
            })}
        </section>
    )
}