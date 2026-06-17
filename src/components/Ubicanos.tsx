export default function Ubicanos() {
  return (
    <section id="ubicacion" className="section section-light brand-panel-section">
      <div className="container section-inner">
        <div className="section-title">
          <span>Ubícanos</span>
          <h2>Encuéntranos en Ica</h2>
          <p>
            Visítanos en nuestra oficina o comunícate con nosotros para recibir
            asesoría personalizada sobre Condominio Villa Hermosa.
          </p>
        </div>

        <div className="brand-panel ubicacion-panel">
          <div className="brand-panel-badge">Visítanos</div>

          <div className="ubicacion-panel-grid">
            <div className="ubicacion-map-card">
              <iframe
                title="Mapa de ubicación AyT House"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1206.8639128292184!2d-75.72308917149894!3d-14.075578399143364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e29b1ea42139%3A0xd44f46b63cd4eb7a!2sC.%20Manuel%20Medina%20384%2C%20Ica%2011001!5e1!3m2!1ses-419!2spe!4v1781552308012!5m2!1ses-419!2spe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="ubicacion-info-card">
              <h3>Dirección y horarios</h3>

              <div className="ubicacion-info-list">
                <div className="ubicacion-info-item">
                  <span>📍</span>
                  <p>Calle Manuel Medina 384, Ica, Perú</p>
                </div>

                <div className="ubicacion-info-item">
                  <span>🗺️</span>
                  <p>Referencia: atrás del Mercado Manzanilla</p>
                </div>

                <div className="ubicacion-info-item">
                  <span>🕒</span>
                  <p>Lunes a sábado de 9:00 a.m. a 6:00 p.m.</p>
                </div>

                <div className="ubicacion-info-item">
                  <span>📱</span>
                  <p>
                    WhatsApp:{" "}
                    <a
                      href="https://wa.me/51910541885"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +51 910 541 885
                    </a>
                  </p>
                </div>

                <div className="ubicacion-info-item">
                  <span>🌐</span>
                  <p>
                    Facebook:{" "}
                    <a
                      href="https://www.facebook.com/inmobiliaria.ayt.ica"
                      target="_blank"
                      rel="noreferrer"
                    >
                      inmobiliaria.ayt.ica
                    </a>
                  </p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/C1mJ2j8dJPYQoQwP9"
                target="_blank"
                rel="noreferrer"
                className="ubicacion-map-button"
              >
                Ver ubicación en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}