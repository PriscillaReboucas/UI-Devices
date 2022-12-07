import { createContext, useState, useEffect } from "react";
import * as devicesAPI from './devicesAPI';
import { DevicesContextType, IDevices, DevicesProviderProps } from "./@types/devices.d";

export const DevicesContext = createContext<DevicesContextType | null>(null);

const DevicesProvider= ({children}: DevicesProviderProps) => {
    const [devices, setDevices] = useState<IDevices[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        devicesAPI.retrieve().then( data => {
            setDevices(data.devices)
            setLoading(false)
        })
    }, []);

    return (
        <DevicesContext.Provider value={{devices:devices, loading:loading}}>
            {children}
        </DevicesContext.Provider>
    )
}

export default DevicesProvider;