import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { useContext } from 'react';

import Context from './Context';
// import { Maincontext } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <App />
  </Context>
);


