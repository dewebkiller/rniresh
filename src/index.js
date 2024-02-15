import React from 'react'
import 'aos/dist/aos.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Router from './Router';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);