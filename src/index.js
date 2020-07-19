import React from 'react';
import {render} from 'react-dom';
import './index.css';

// Main app
import App from './App';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

render(<App/>, document.querySelector('#app'));