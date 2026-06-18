import villaVideo from "../assets/villa-hermosa.mp4";
import villaHermosaLogo from "../assets/villahermosalogo.png";

import ExperienciaVilla from "./ExperienciaVilla";
import Beneficios from "./Beneficios";
import Testimonios from "./Testimonios";
import PlanoGeneral from "./PlanoGeneral";

export default function VillaHermosaPage() {
  return (
    <>
      <section className="villa-video-hero">
        <video
          className="villa-video-bg"
          src={villaVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="villa-video-overlay" />

        <div className="villa-video-content">
          <div className="villa-hero-logo-badge">
            <img
              src={villaHermosaLogo}
              alt="Condominio Villa Hermosa"
              className="villa-hero-logo"
            />
          </div>

          <h1>Vive, invierte y disfruta entre dunas y mar</h1>

          <p>
            Descubre el "Condominio Villa Hermosa", un refugio ecoturístico
            cerca de Carhuaz, en Ica, pensado para familias e inversionistas que
            buscan tranquilidad, descanso y proyección en un entorno turístico
            con alto potencial de crecimiento.
          </p>

          <div className="villa-hero-highlight">
            Invierte, disfruta y rentabiliza tu casa de campo con un sistema
            administrado profesionalmente.
          </div>

          <div className="villa-video-actions">
            <a href="#plano-general" className="villa-video-btn-primary">
              Ver disponibilidad
            </a>

            <a href="/contacto" className="villa-video-btn-secondary">
              Solicitar información
            </a>
          </div>
        </div>
      </section>

      <ExperienciaVilla />
      <Beneficios />
      <Testimonios />
      <PlanoGeneral />
    </>
  );
}