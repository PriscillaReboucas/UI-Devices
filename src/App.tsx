import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Product } from './Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/devices/:productName' element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
