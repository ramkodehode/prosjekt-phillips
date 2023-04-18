import { Route, Routes } from 'react-router-dom';
import Privacy from './components/privacy/Privacy';
import Tjenester from './components/Tjenester';
import React from 'react';
import Hjem from './components/Hjem';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hjem />}></Route>
        <Route path="privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
