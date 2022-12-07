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

export interface IDevices {
    model_id: string
    line: Line
    product: Product
    shortname: string[]
    unifi: Unifi
}