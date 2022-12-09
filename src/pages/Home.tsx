import { useContext, useMemo } from "react";
import { DevicesContextType } from "../@types/devices.d";
import { DevicesContext } from "../DevicesContext";
import { Toolbar } from "../components/Toolbar";
import { DevicesGrid } from "../components/DevicesGrid";

export const Home = () => {
  const { devices, loading, search, filter } = useContext(DevicesContext) as DevicesContextType;

  const filteredProducts = useMemo(() => {
    const searchProducts = devices.filter(device => device.product.name.toLowerCase().includes(search.toLowerCase()));
    if (filter && filter !== 'all') {
      const devicesFiltered = searchProducts.filter(device => {return device.line.name.toLowerCase() === filter.toLowerCase()});
      return devicesFiltered;
    }
    return searchProducts;
}, [filter, devices, search]);

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
      <DevicesGrid devices={filteredProducts} />
    </>
  );
};
