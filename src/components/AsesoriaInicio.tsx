import { CheckCircle, MessageCircle, ShieldCheck } from "lucide-react";
import asesoraContacto from "../assets/asesora-contacto.png";

export default function AsesoriaInicio() {
  return (
    <section className="home-advisor-section">
      <div className="home-advisor-inner">
        <div className="home-advisor-content">
          <div className="home-advisor-pill">
            <MessageCircle size={17} />
            <span>Asesoría inmobiliaria</span>
          </div>

          <h2>Te ayudamos a elegir el lote ideal para tu familia</h2>

          <p>
            En A&amp;T House Inmobiliaria te acompañamos con información clara,
            atención personalizada y orientación profesional para invertir con
            mayor seguridad en Condominio Villa Hermosa.
          </p>

          <div className="home-advisor-list">
            <div>
              <CheckCircle size={22} />
              <span>Información clara del proyecto</span>
            </div>

            <div>
              <ShieldCheck size={22} />
              <span>Acompañamiento durante el proceso</span>
            </div>

            <div>
              <CheckCircle size={22} />
              <span>Opciones pensadas para familias e inversionistas</span>
            </div>
          </div>

          <div className="home-advisor-actions">
            <a href="/contacto" className="home-advisor-btn-primary">
              Solicitar asesoría
            </a>

            <a
              href="https://wa.me/51910541885"
              target="_blank"
              rel="noreferrer"
              className="home-advisor-btn-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="home-advisor-visual">
          <div className="home-advisor-bg-card" />

          <img
            src={asesoraContacto}
            alt="Asesora inmobiliaria A&T House"
            className="home-advisor-image"
          />

          <div className="home-advisor-floating">
            <strong>Atención personalizada</strong>
            <span>Resolvemos tus dudas antes de invertir.</span>
          </div>
        </div>
      </div>
    </section>
  );
}