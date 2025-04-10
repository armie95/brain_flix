import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as ReactRouter } from 'react-router-dom'; // <-- aliased here
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReactRouter>
    <App />
  </ReactRouter>
);
