import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Product } from './Product';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/devices/:productName' element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
