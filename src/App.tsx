import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Device } from "./pages/Device";
import { Header } from "./components/Header";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/device/:productName" element={<Device />}></Route>
      </Routes>
    </div>
  );
}

export default App;
