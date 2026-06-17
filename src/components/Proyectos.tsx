import portico from "../assets/portico.png";

const projects = [
  {
    title: "Condominio Villa Hermosa",
    description:
      "Espacio exclusivo con lotes amplios, diseño sostenible y excelente ubicación en Ica.",
    image: portico,
    tag: "Proyecto destacado",
  },
];

export default function Proyectos() {
  return (
    <section id="villa-hermosa" className="section section-light projects-section">
      <div className="container section-inner">
        <div className="section-title">
          <span>Proyectos</span>
          <h2>Oportunidades inmobiliarias con alto potencial</h2>
          <p>
            Explora nuestros proyectos en Ica diseñados para familias e inversionistas
            que buscan seguridad, crecimiento y calidad de vida.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="project-content">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a className="project-button" href="/contacto">
                  Quiero información
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}