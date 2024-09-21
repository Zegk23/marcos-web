import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import de las páginas
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CatalogPage from "./pages/CatalogPage";
import NotFoundPage from "./pages/NotFoundPage";
import MotoDetail from "./pages/MotoDetail";
// Import de los Components
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Nosotros" element={<AboutPage />} />
        <Route path="/Catalogo" element={<CatalogPage />} />
        <Route path="/Contacto" element={<ContactPage />} />
        <Route path="/moto/:nombre" element={<MotoDetail/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
