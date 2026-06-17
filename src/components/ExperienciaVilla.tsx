import { Leaf, Trees, Utensils, Users, Sparkles } from "lucide-react";

const experiencias = [
  {
    icon: <Users size={28} />,
    title: "Casa club familiar",
    text: "Un espacio pensado para compartir, descansar y crear momentos especiales en familia.",
  },
  {
    icon: <Trees size={28} />,
    title: "Áreas verdes",
    text: "Parques y ambientes abiertos que aportan bienestar, tranquilidad y calidad de vida.",
  },
  {
    icon: <Utensils size={28} />,
    title: "Restaurante campestre",
    text: "Una propuesta para disfrutar de la gastronomía en un entorno natural y familiar.",
  },
  {
    icon: <Leaf size={28} />,
    title: "Enfoque ecoturístico",
    text: "Un proyecto conectado con la naturaleza, el descanso y el crecimiento sostenible.",
  },
];

export default function ExperienciaVilla() {
  return (
    <section id="experiencia" className="experiencia-villa-section">
      <div className="container experiencia-villa-inner">
        <div className="section-title">
          <span>Experiencia Villa Hermosa</span>
          <h2>Más que un lote, un lugar para disfrutar en familia</h2>
          <p>
            Condominio Villa Hermosa integra espacios pensados para vivir,
            invertir, compartir y disfrutar de un entorno familiar cerca de la
            naturaleza.
          </p>
        </div>

        <div className="experiencia-villa-panel">
          <div className="experiencia-villa-highlight">
            <Sparkles size={30} />
            <h3>Un proyecto pensado para familias e inversionistas</h3>
            <p>
              Espacios recreativos, zonas de descanso, áreas verdes y servicios
              que elevan el valor de tu inversión.
            </p>
          </div>

          <div className="experiencia-villa-grid">
            {experiencias.map((item) => (
              <article className="experiencia-villa-card" key={item.title}>
                <div className="experiencia-villa-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}