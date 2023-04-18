import React from 'react';
import Personvern from './Personvern';
import {Routes, Route} from 'react-router-dom';

const Policy = () => {
  return (
<>

          <Routes>
              <Route path="/Personvern" element={<Personvern/>} />
          </Routes>
      </>
  )
}

export default Policy;