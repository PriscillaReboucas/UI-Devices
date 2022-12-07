import { Link } from "react-router-dom";
import { useContext } from "react";
import { IDevices, DevicesContextType } from "./@types/devices.d";
import { DevicesContext } from "./DevicesContext";
import background from './assets/background.png';
import { Toolbar } from "./components/Toolbar";

export const Home = () => {
    const {devices, loading} = useContext(DevicesContext) as DevicesContextType;

    if(loading) {
        return (
            <section>
                <h3>Loading...</h3>
            </section>
        )
    }

    return (
        <>
        <Toolbar />
            {devices && devices.map((device: IDevices) => {
                return (
                    <Link to={`/devices/${device.product.name}`} key={device.model_id}>
                        <img src={background} alt={device.product.name}/>
                        <p>{device.line.name}</p>
                        <p>{device.product.name}</p>    
                    </Link>
                )
            })}
        </>
    )
}