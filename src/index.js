<<<<<<< HEAD
import React from 'react';
import './index.css';
import App from './App';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";





import { BrowserRouter as Router } from "react-router-dom";
>>>>>>> 66028b12d068cbf404476d67100c53a0dba39fdc

root.render(
<<<<<<< HEAD
  <BrowserRouter>
    <App />
  </BrowserRouter>
=======
  <Router basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
      <App />
    
    </React.StrictMode>
  </Router>
>>>>>>> 66028b12d068cbf404476d67100c53a0dba39fdc
);
