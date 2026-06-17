import { useState } from "react";

import plano1 from "../assets/plano1.png";
import plano2 from "../assets/plano2.png";
import plano4 from "../assets/plano4.png";

const etapas = [
  {
    label: "1ra Etapa",
    image: plano1,
    badge: "PRE-VENTA",
  },
  {
    label: "2da Etapa",
    image: plano2,
    badge: "PRE-VENTA",
  },
  {
    label: "3ra Etapa",
    image: plano4,
    badge: "PRE-VENTA",
  },
];

export default function PlanoGeneral() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEtapa = etapas[activeIndex];

  return (
    <section id="plano-general" className="plano-premium-section">
      <div className="plano-premium-bg" />

      <div className="container plano-premium-inner">
        <div className="plano-premium-title">
          <h2>Plano Clave</h2>
        </div>

        <div className="plano-premium-tabs">
          {etapas.map((etapa, index) => (
            <button
              key={etapa.label}
              type="button"
              className={`plano-tab ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {etapa.label}
            </button>
          ))}
        </div>

        <div className="plano-premium-layout">
          <aside className="plano-legend-card">
            <div className="legend-status sold">Vendido</div>
            <div className="legend-status available">Disponible</div>

            <div className="legend-text">
              <span>Disponibilidad actualizada</span>
              <p>
                Revisa cada etapa y elige el lote ideal para tu familia o
                inversión dentro de Condominio Villa Hermosa.
              </p>
            </div>
          </aside>

          <div className="plano-image-card">
            <img src={activeEtapa.image} alt={`Plano ${activeEtapa.label}`} />
          </div>

          <aside className="quote-card-premium">
            <div className="quote-badge">{activeEtapa.badge}</div>

            <h3>Cotizar lote</h3>

            <div className="quote-detail">
              <small>Área referencial</small>
              <strong>200 m²</strong>
            </div>

            <div className="quote-detail">
              <small>Inicial desde</small>
              <strong>S/ 2,000</strong>
            </div>

            <div className="quote-detail">
              <small>Cuotas desde</small>
              <strong>S/ 275</strong>
            </div>

            <a href="/contacto" className="quote-button">
              Solicitar información
            </a>

            <p>
              Consulta disponibilidad, ubicación y condiciones de financiamiento.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}