import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
