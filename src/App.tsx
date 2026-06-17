import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AsesoriaInicio from "./components/AsesoriaInicio";
import Nosotros from "./components/Nosotros";
import Beneficios from "./components/Beneficios";
import Testimonios from "./components/Testimonios";
import PlanoGeneral from "./components/PlanoGeneral";
import Faq from "./components/Faq";
import Ubicanos from "./components/Ubicanos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import VillaHermosaPage from "./components/VillaHermosaPage";

function HomePage() {
  return (
    <>
      <Hero />
      <AsesoriaInicio />
      <Nosotros />
      <Beneficios />
      <Testimonios />
      <PlanoGeneral />
    </>
  );
}

function PreguntasPage() {
  return <Faq />;
}

function UbicacionPage() {
  return <Ubicanos />;
}

function ContactoPage() {
  return <Contacto />;
}

function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/villa-hermosa" element={<VillaHermosaPage />} />
          <Route path="/preguntas" element={<PreguntasPage />} />
          <Route path="/ubicacion" element={<UbicacionPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;