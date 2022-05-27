import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* CSS import */
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Layout from "./components/Layout";
import Home from "./pages/HomePage";
import Uno from "./pages/Uno";
import Due from "./pages/Due";
import Tre from "./pages/Tre";
import Quattro from "./pages/Quattro";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="porta-narrativa" element={<Uno />} />
          <Route path="citt" element={<Due />} />
          <Route path="aforisma" element={<Tre />} />
          <Route path="logo" element={<Quattro />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
