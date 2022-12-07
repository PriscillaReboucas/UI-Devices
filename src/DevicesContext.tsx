import { createContext, useState, useEffect } from "react";
import * as devicesAPI from './devicesAPI';

export const DevicesContext = createContext([]);

const DevicesProvider = ({children}) => {
    const [devices, setDevices] = useState<[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        devicesAPI.retrieve().then( data => {
            setDevices(data.devices)
            setLoading(false)
        })
    }, []);

    return (
        <DevicesContext.Provider value={{devices: devices, loading: loading}}>
            {children}
        </DevicesContext.Provider>
    )
}

export default DevicesProvider;