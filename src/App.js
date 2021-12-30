import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar/navBar';
import Landing from './components/landing/landing';
import GetChoferes from './components/choferes/getChoferes/getChoferes';
import Home from './components/home/home';
import PostChoferes from './components/choferes/postChoferes/postChoferes';
import CargarRD from './components/recaudaciones/cargarRecaudaciones/cargarRD';
import MostrarRD from './components/recaudaciones/mostrarRecaudaciones/mostrarRD';
function App() {
  return (
    <>
      <NavBar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/choferes" element={<GetChoferes />} />
      <Route path="/cargarChofer" element={<PostChoferes />} />
      <Route path="/recaudaciones" element={<CargarRD />} />
      <Route path="/recaudacionesTotales" element={<MostrarRD />} />
    </Routes>
    </>
  );
}

export default App;
