import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// createRoot connects React to the <div id="root"> in index.html.
createRoot(document.getElementById('root')).render(<App />);
