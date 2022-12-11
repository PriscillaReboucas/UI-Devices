import { Link } from "react-router-dom";
import { IDevices } from "../@types/devices.d";
import './DeviceCard.css';

type Props = {
    device: IDevices;
};

export const DeviceCard = ({device}:Props) => {
    return (
    <>
        <Link  className="device__card--container"
        to={`/device/${device.product.name}`}
        key={device.model_id}
        data-testId='device__card--container'
        >
            <div className="card__image--container">
                <img src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_129x129.png`} alt={device.product.name} />
            </div>
            <div className="card__text--container">
                <p className="card__text--title" data-testId='card__text--title'>{device.product.name}</p>
                <p className="card__text--subtitle">{device.line.name}</p>
            </div>
        </Link>
    </>
    )
}