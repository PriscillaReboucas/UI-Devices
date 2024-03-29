import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import DevicesProvider from './DevicesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DevicesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DevicesProvider>
  </React.StrictMode>
);
