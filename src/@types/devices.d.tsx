import { ReactNode } from "react";

export type Line = {
    name: string,
    id: string
}

export type Product = {
    abbrev: string,
    name: string
}

export type Na = {
    maxPower: number
    maxSpeedMegabitsPerSecond: number
}

export type Radios = {
    na: Na
}

export type Network = {
    numberOfPorts: number
    radios: Radios
}

export type Unifi = {
    network: Network
    adoptability: string
}

export type Icon = {
    resolutions: Array<number>
    id: string
}

export interface IDevices {
    model_id: string
    icon: Icon
    line: Line
    product: Product
    shortnames: Array<string>
    unifi: Unifi
}

export type DevicesContextType = {
    devices: IDevices[]
    loading: boolean
    search: string
    setSearch: Function
    filter: string
    setFilter: Function
}

export type DevicesProviderProps = {
    children: ReactNode
}