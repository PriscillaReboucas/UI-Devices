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
    maxSpeed: number
}

export type Radios = {
    na: Na
}

export type Unifi = {
    numberofPorts: number
    radios: Radios
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
    shortname: string[]
    unifi: Unifi
}

export type DevicesContextType = {
    devices: IDevices[]
    loading: boolean
}

export type DevicesProviderProps = {
    children: ReactNode
}