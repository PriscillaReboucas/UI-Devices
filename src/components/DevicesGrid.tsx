import { IDevices } from "../@types/devices.d";
import { DeviceCard } from "./DeviceCard";
import "./DevicesGrid.css";

type Props = {
  devices: IDevices[];
};

export const DevicesGrid = ({ devices }: Props) => {
  return (
    <>
        <main className="card--flex--container">
            <p className="devices--size" data-testid="devices--size">{devices.length} devices</p>
            <section className="cardGrid--flex">
                {devices &&
                devices.map((device: IDevices) => {
                    return (<article key={device.model_id} data-testid='devices__card--container'>
                                <DeviceCard device={device} />
                            </article>
                    );
                })}
            </section>
        </main>
    </>
  );
};
