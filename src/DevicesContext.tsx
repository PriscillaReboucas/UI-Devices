import { createContext, useState, useEffect } from "react";
import * as devicesAPI from './devicesAPI';
import { DevicesContextType, IDevices, DevicesProviderProps } from "./@types/devices.d";

export const DevicesContext = createContext<DevicesContextType | null>(null);

const DevicesProvider= ({children}: DevicesProviderProps) => {
    const [devices, setDevices] = useState<IDevices[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<string>('');
    const [view, setView] = useState<string>('list');

    useEffect(() => {
        devicesAPI.retrieve().then( data => {
            setDevices(data.devices)
            setLoading(false)
        })
    }, []);

    return (
        <DevicesContext.Provider value={{devices, loading, search, setSearch, filter, setFilter, view, setView}}>
            {children}
        </DevicesContext.Provider>
    )
}

export default DevicesProvider;