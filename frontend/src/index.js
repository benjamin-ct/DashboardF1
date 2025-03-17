// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css'; // Optionnel : pour ajouter du style global

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);