import React from 'react';
import './index.css';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/privacy/ScrollToTop';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
);
