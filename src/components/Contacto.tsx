import {
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";

import asesoraContacto from "../assets/asesora-contacto.png";
import contactoFondo from "../assets/contacto-fondo.png";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="contact-premium"
      style={{ backgroundImage: `url(${contactoFondo})` }}
    >
      <div className="contact-premium-overlay" />

      <div className="contact-premium-inner">
        <div className="contact-left">
          <div className="advisor-box">
            <div className="advisor-bg-shape" />

            <img
              src={asesoraContacto}
              alt="Asesora inmobiliaria AyT House"
              className="advisor-image"
            />
          </div>
        </div>

        <div className="contact-center">
          <div className="contact-pill">
            <MessageCircle size={16} />
            <span>Contáctanos</span>
          </div>

          <h2>
            Estamos listos para asesorarte
            <strong> en tu inversión</strong>
          </h2>

          <p>
            Completa el formulario o escríbenos directamente para conocer más
            sobre Condominio Villa Hermosa y otras oportunidades inmobiliarias
            en Ica.
          </p>

          <div className="contact-premium-list">
            <a
              href="https://wa.me/51910541885"
              target="_blank"
              rel="noreferrer"
              className="contact-premium-item"
            >
              <span>
                <MessageCircle size={21} />
              </span>

              <div>
                <strong>WhatsApp</strong>
                <small>+51 910 541 885</small>
              </div>
            </a>

            <a
              href="https://www.facebook.com/inmobiliaria.ayt.ica"
              target="_blank"
              rel="noreferrer"
              className="contact-premium-item"
            >
              <span>
                <Globe size={21} />
              </span>

              <div>
                <strong>Facebook</strong>
                <small>inmobiliaria.ayt.ica</small>
              </div>
            </a>

            <div className="contact-premium-item">
              <span>
                <MapPin size={21} />
              </span>

              <div>
                <strong>Ubicación</strong>
                <small>
                  Calle Manuel Medina 384, Ica, Perú <br />
                  Referencia: atrás del Mercado Manzanilla
                </small>
              </div>
            </div>

            <div className="contact-premium-item">
              <span>
                <Clock size={21} />
              </span>

              <div>
                <strong>Horario de atención</strong>
                <small>Lunes a sábado de 9:00 a.m. a 6:00 p.m.</small>
              </div>
            </div>

            <a
              href="mailto:inmobiliariaathouse@gmail.com"
              className="contact-premium-item"
            >
              <span>
                <Mail size={21} />
              </span>

              <div>
                <strong>Correo</strong>
                <small>inmobiliariaathouse@gmail.com</small>
              </div>
            </a>
          </div>
        </div>

        <form
          className="contact-form-premium"
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            Nombre completo
            <input type="text" placeholder="Escribe tu nombre completo" />
          </label>

          <label>
            Celular / WhatsApp
            <div className="phone-field-premium">
              <span>🇵🇪 +51</span>
              <input type="tel" placeholder="Número de celular" />
            </div>
          </label>

          <label>
            Correo electrónico
            <input type="email" placeholder="ejemplo@correo.com" />
          </label>

          <label>
            Proyecto de interés
            <select defaultValue="Condominio Villa Hermosa">
              <option value="Condominio Villa Hermosa">
                Condominio Villa Hermosa
              </option>
            </select>
          </label>

          <label>
            Mensaje
            <textarea
              placeholder="Cuéntanos cómo podemos ayudarte..."
              rows={4}
            />
          </label>

          <button type="submit">
            <Send size={19} />
            Solicitar información
          </button>

          <div className="form-security">
            <ShieldCheck size={17} />
            <span>Tu información está protegida. No compartimos tus datos.</span>
          </div>
        </form>
      </div>
    </section>
  );
}