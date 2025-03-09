import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Juego from "./views/Juego";
import Instrucciones from "./views/Instrucciones";


// Creamos la función App que con el menú de navegación
function App() {
  return (
    <Router>
      <nav className="nav-bar">
        <Link to="/">Juego</Link>
        <Link to="/instrucciones">Instrucciones</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Juego />} />
        <Route path="/instrucciones" element={<Instrucciones />} />
      </Routes>
    </Router>
  );
}

export default App;