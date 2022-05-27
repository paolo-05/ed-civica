import { useLocation } from "react-router-dom";

import Footer from "../components/Footer";
const NotFound = () => {
  let location = useLocation();
  document.title = "Paura del Cambiamento - 404";
  return (
    <div>
      <header className="container" style={{ marginBottom: 350 }}>
        <h1 style={{ fontSize: "120px" }}>404</h1>
        <h1>Pagina non trovata</h1>
      </header>
      <div className="container">
        <h1 style={{ color: "var(--secondary-text-color)" }}>
          Nessun risultato per <code>{location.pathname}</code>
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
