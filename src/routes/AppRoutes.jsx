import { Routes, Route } from "react-router-dom";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";

// Vistas
import Home from "../pages/Home";
import Cartelera from "../pages/Cartelera";
import Food from "../pages/Food";
import Otros from "../pages/Otros";
import Tickets from "../pages/tickets";
import DetallePelicula from "../pages/DetallePelicula";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/alimentos" element={<Food />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/pelicula/:id" element={<DetallePelicula />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default AppRoutes;
