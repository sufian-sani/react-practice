import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App3 from './App3.jsx';
import 'milligram/dist/milligram.css'
import App4 from './App4.jsx';
import App5 from './App5';
import "./assets/css/style.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App5 />
    <App4 />
    <App3 />
    <App2 />
    <App />
  </React.StrictMode>,
)
