import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard.js';
import CambioDivisas from '../CambioDivisas/CambioDivisas.js';
import PagarServicios from '../PagarServicios/PagarServicios.js';
import PagarTarjetaCredito from '../PagarTarjetaCredito/PagarTarjetaCredito';
import NonExistentPage from '../NonExistentPage/NonExistentPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/cambio-de-divisas" element={<CambioDivisas />} />
        <Route path="/pagar-servicios" element={<PagarServicios />} />
        <Route path="/pagar-tarjeta-de-credito" element={<PagarTarjetaCredito />} />
        <Route path="*" element={<NonExistentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
