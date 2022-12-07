import { useState, useEffect } from "react";
import * as devicesAPI from './devicesAPI';

export const Home = () => {
    const [devices, setDevices] = useState<[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        devicesAPI.retrieve().then( devicesList => {
            setDevices(devicesList.devices)
            setLoading(false)
        })
    }, []);

    type Line = {
        name: string,
        id: string
    }

    type Product = {
        abbrev: string,
        name: string
    }

    interface IDevices {
        model_id: string
        line: Line
        product: Product
    }

    console.log(devices, 'here is product name')

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
                    <article>
                        <p>{device.line.name}</p>
                        <p>{device.product.name}</p>    
                    </article>
                )
            })}
        </>
    )
}