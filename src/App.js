// App.js
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./AuthContext"; // Importa el AuthProvider

// Import de las páginas
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CatalogPage from "./pages/CatalogPage";
import NotFoundPage from "./pages/NotFoundPage";
import MotoDetail from "./pages/MotoDetail";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";

// Import de los Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  const noHeaderFooterRoutes = ["/login", "/register", "/UserPage", "*"];

  return (
    <>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Nosotros" element={<AboutPage />} />
        <Route path="/Catalogo" element={<CatalogPage />} />
        <Route path="/Contacto" element={<ContactPage />} />
        <Route path="/moto/:nombre" element={<MotoDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  );
}
