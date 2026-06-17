import villaVideo from "../assets/villa-hermosa.mp4";

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
          <span>Condominio Villa Hermosa</span>

          <h1>Vive, invierte y disfruta cerca a la naturaleza</h1>

          <p>
            Descubre Condominio Villa Hermosa, un proyecto pensado para familias
            e inversionistas que buscan tranquilidad, proyección y una
            oportunidad inmobiliaria con visión de crecimiento.
          </p>

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