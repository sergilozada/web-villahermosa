import proyectoDia from "../assets/proyectodia.png";
import proyectoTarde from "../assets/proyectotarde.png";
import proyectoNoche from "../assets/proyectonoche.png";

const heroImages = [proyectoDia, proyectoTarde, proyectoNoche];

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-slider" aria-hidden="true">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="hero-slide"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="hero-inner">
        <div className="hero-copy hero-premium-card">
          <span>Condominio Villa Hermosa</span>

          <h2>Invierte seguro en tu futuro</h2>

          <p>
            Un proyecto pensado para familias e inversionistas que buscan
            tranquilidad, proyección y una oportunidad inmobiliaria con visión
            de crecimiento.
          </p>

          <div className="hero-location-line">
            Ica · Cerca a Carhuaz · Proyecto familiar y de inversión
          </div>

          <div className="hero-actions">
            <a href="/villa-hermosa" className="btn-primary">
              Ver proyecto
            </a>

            <a href="/contacto" className="btn-secondary">
              Solicitar información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}