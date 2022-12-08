import { useContext } from "react";
import { DevicesContextType } from "./@types/devices.d";
import { DevicesContext } from "./DevicesContext";
import { Toolbar } from "./components/Toolbar";
import { CardGrid } from "./components/CardGrid";

export const Home = () => {
  const { devices, loading } = useContext(DevicesContext) as DevicesContextType;

  if (loading) {
    return (
      <section>
        <h3>Loading...</h3>
      </section>
    );
  }

  return (
    <>
      <Toolbar />
      <CardGrid devices={devices} />
    </>
  );
};
