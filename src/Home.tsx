import { Link } from "react-router-dom";
import { useContext } from "react";
import { IDevices } from "./@types/devices.d";
import { DevicesContext } from "./DevicesContext";

export const Home = () => {
    const {devices, loading} = useContext(DevicesContext);

    if(loading) {
        return (
            <section>
                <h3>Loading...</h3>
            </section>
        )
    }

    return (
        <>
            <h3>PRODUCT LINE</h3>
            {devices && devices.map((device: IDevices) => {
                return (
                    <Link to={`/devices/${device.product.name}`} key={device.model_id}>
                        <p>{device.line.name}</p>
                        <p>{device.product.name}</p>    
                    </Link>
                )
            })}
        </>
    )
}