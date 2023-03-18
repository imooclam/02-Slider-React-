import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../css/general.css';
import '../css/query.css';
import '../css/style.css';
import Alternative from './Alternative';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Alternative />
    {/* <App /> */}
  </React.StrictMode>
);
