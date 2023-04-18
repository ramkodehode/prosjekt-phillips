<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import Hjem from './components/Hjem';
import Privacy from './components/privacy/Privacy';
import Tjenester from './components/Tjenester';
=======
import React from "react";
import Hjem from "./components/Hjem";
>>>>>>> 66028b12d068cbf404476d67100c53a0dba39fdc




function App() {
  return (
    <>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Hjem />}>
          <Route path="tjenester" element={<Tjenester />} />
        </Route>
        <Route path="privacy" element={<Privacy />} />
      </Routes>
=======
      <Hjem />
     
>>>>>>> 66028b12d068cbf404476d67100c53a0dba39fdc
    </>
  );
}

export default App;
