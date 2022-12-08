import { Link } from "react-router-dom";
import { IDevices } from "../@types/devices.d";
import "./CardGrid.css";

type Props = {
  devices: IDevices[];
};

export const CardGrid = ({ devices }: Props) => {
  return (
    <section className="cardGrid__gridView--container">
      <article className="cardGrid__gridView--flex">
        {devices &&
          devices.map((device: IDevices) => {
            return (<>
                        <Link  className="device__card--container"
                            to={`/devices/${device.product.name}`}
                            key={device.model_id}
                        >
        
                                <div className="card__image--container">
                                    <img src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_129x129.png`} alt={device.product.name} />
                                </div>
                                <div className="card__text--container">
                                    <p className="card__text--title">{device.line.name}</p>
                                    <p className="card__text--subtitle">{device.product.name}</p>
                                </div>
                        </Link>
                    </>
            );
          })}
      </article>
    </section>
  );
};
