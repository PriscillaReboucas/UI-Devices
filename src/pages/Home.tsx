import { useContext, useMemo } from "react";
import { DevicesContextType, IDevices } from "../@types/devices.d";
import { DevicesContext } from "../DevicesContext";
import { Toolbar } from "../components/Toolbar";
import { DevicesGrid } from "../components/DevicesGrid";
import { DevicesList } from "../components/DevicesList";

export const Home = () => {
  const { devices, loading, search, selected, view } = useContext(DevicesContext) as DevicesContextType;

  const filteredProducts = useMemo(() => {
    const searchProducts = devices.filter(device => device.product.name.toLowerCase().includes(search.toLowerCase()));
    if (selected.length > 0) {
      return searchProducts.filter(device => selected.includes(device.line.name));

    }
    return searchProducts;
}, [selected, devices, search]);

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
      {view === 'list'? <DevicesList devices={filteredProducts} /> : <DevicesGrid devices={filteredProducts} />}
    </>
  );
};
