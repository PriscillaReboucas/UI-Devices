import { IDevices } from "../@types/devices.d";
import { Link } from "react-router-dom";
type Props = {
    device: IDevices;
};

export const DeviceLine = ({device}:Props) => {
    return (
        <>
            <Link  className="line--container"
            to={`/devices/${device.product.name}`}
            key={device.model_id}
            >
                <div className="line__image--container">
                    <img src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_25x25.png`} alt={device.product.name} />
                </div>
                <div className="line__text--container">
                    <p className="line__text--title">{device.line.name}</p>
                    <p className="line__text--subtitle">{device.product.name}</p>
                </div>
            </Link>
        </>
    )
}