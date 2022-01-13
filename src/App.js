import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar/navBar';
import BarChart from './components/landing/landing';
import Calendar from './components/calendar/calendar';
import GetChoferes from './components/choferes/getChoferes/getChoferes';
import PostChoferes from './components/choferes/postChoferes/postChoferes';
import CargarRD from './components/recaudaciones/cargarRecaudaciones/cargarRD';
import MostrarRD from './components/recaudaciones/mostrarRecaudaciones/mostrarRD';
import PostChoques from './components/choques/postChoques/postChoques';
import GetChoques from './components/choques/getChoques/getChoques';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<BarChart />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/choferes" element={<GetChoferes />} />
      <Route path="/cargarChofer" element={<PostChoferes />} />
      <Route path="/recaudaciones" element={<CargarRD />} />
      <Route path="/recaudacionesTotales" element={<MostrarRD />} />
      <Route path="/choques" element={<PostChoques />} />
      <Route path="/mostrarChoques" element={<GetChoques />} />
    </Routes>
    </>
  );
}

export default App;
