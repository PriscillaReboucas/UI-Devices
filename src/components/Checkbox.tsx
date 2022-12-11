import React, { useContext } from "react";
import { DevicesContext } from "../DevicesContext";
import { DevicesContextType } from "../@types/devices.d";

type Props = {
    product: string
};

export const Checkbox = ({product}:Props) => {
    const { selected, setSelected } = useContext(DevicesContext) as DevicesContextType;

    function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
            setSelected((prev:string[]) => [...prev, value])
        } else {
            setSelected((prev:string[]) => [...prev.filter((product:string) => product !== value)])
        }
    }

    return (
        <>
            <input value={product} checked={selected.includes(product)} className='modal__input' type='checkbox' onChange={handleChange} />
            <label className='modal__label' htmlFor={product}>{product}</label>
        </>
    )
}