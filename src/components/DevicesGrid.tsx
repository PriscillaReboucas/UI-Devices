import { IDevices } from "../@types/devices.d";
import { Card } from "./Card";
import "./DevicesGrid.css";

type Props = {
  devices: IDevices[];
};

export const DevicesGrid = ({ devices }: Props) => {
  return (
    <>
        <div className="cardGrid--container">
            <p className="devices--size">{devices.length} devices</p>
            <section className="cardGrid--flex">
                {devices &&
                devices.map((device: IDevices) => {
                    return (<article key={device.model_id}>
                                <Card device={device} />
                            </article>
                    );
                })}
            </section>
        </div>
    </>
  );
};
