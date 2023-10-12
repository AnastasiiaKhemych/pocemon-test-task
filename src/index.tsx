import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter as Router} from "react-router-dom";
import './reset.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Router>
        <App />
    </Router>
);
