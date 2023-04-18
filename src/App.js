import { Route, Routes } from 'react-router-dom';
import Hjem from './components/Hjem';
import Privacy from './components/privacy/Privacy';
import Tjenester from './components/Tjenester';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hjem />}>
          <Route path="tjenester" element={<Tjenester />} />
        </Route>
        <Route path="privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
