import libroReclamaciones from "../assets/libro-reclamaciones.png";

export default function Footer() {
  return (
    <footer className="footer footer-villa">
      <div className="footer-villa-inner">
        <div className="footer-villa-column">
          <h3>Contáctanos:</h3>

          <p>
            <a href="https://wa.me/51910541885" target="_blank" rel="noreferrer">
              +51 910 541 885
            </a>
          </p>

          <p>
            <a href="mailto:inmobiliariaathouse@gmail.com">
              inmobiliariaathouse@gmail.com
            </a>
          </p>

          <div className="footer-space">
            <p>
              <strong>Razón Social:</strong> AyT House Inmobiliaria
            </p>
            <p>
              <strong>RUC:</strong> 20606633212
            </p>
          </div>

          <h3>Horarios de atención:</h3>
          <p>Lunes a sábado</p>
          <p>9:00 a.m. a 6:00 p.m.</p>
        </div>

        <div className="footer-villa-column">
          <h3>Ubícanos:</h3>
          <p>Calle Manuel Medina 384, Ica, Perú</p>
          <p>Referencia: atrás del Mercado Manzanilla</p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Calle+Manuel+Medina+384+Ica+Peru"
            target="_blank"
            rel="noreferrer"
            className="footer-map-link"
          >
            Ver en Google Maps
          </a>

          <a
            href="https://mireclamo.pe/libro/empresa-inmobiliaria-a-y-t-house-sociedad-anomina"
            target="_blank"
            rel="noreferrer"
            className="libro-reclamaciones"
            aria-label="Libro de Reclamaciones"
          >
            <img src={libroReclamaciones} alt="Libro de Reclamaciones" />
          </a>
        </div>

        <div className="footer-villa-column">
          <h3>Nuestros proyectos:</h3>

          <a href="/#villa-hermosa">Condominio Villa Hermosa</a>

          <h3 className="footer-social-title">Síguenos en:</h3>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/inmobiliaria.ayt.ica"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/condominiovillahermosa"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="https://www.tiktok.com/@aythouse"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              ♪
            </a>
          </div>
        </div>
      </div>

      <div className="footer-villa-bottom">
        © 2026 AyT House Inmobiliaria. Todos los derechos reservados.
      </div>
    </footer>
  );
}