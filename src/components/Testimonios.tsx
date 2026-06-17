import familia1 from "../assets/familia1.jpeg";
import familia2 from "../assets/familia2.jpeg";
import familia3 from "../assets/familia3.jpeg";
import familia4 from "../assets/familia4.jpeg";
import familia5 from "../assets/familia5.jpeg";
import familia6 from "../assets/familia6.jpeg";

const familias = [
  {
    nombre: "Familia Huamaní Melgar",
    texto:
      "Compré un terreno con AyT House y quedé muy satisfecho con la atención y el proceso.",
    imagen: familia1,
  },
  {
    nombre: "Familia Saico",
    texto:
      "Estamos muy felices con nuestro terreno. Todo fue claro, seguro y profesional.",
    imagen: familia2,
  },
  {
    nombre: "Familia Quinteros Ugarte",
    texto:
      "La atención fue excelente desde el primer contacto. Nos guiaron en todo momento.",
    imagen: familia3,
  },
  {
    nombre: "Familia Mallco Ccopa",
    texto:
      "Compramos nuestro lote con confianza y recibimos una asesoría muy buena.",
    imagen: familia4,
  },
  {
    nombre: "Familia Torres Quijada",
    texto:
      "Estamos contentos con la compra. El proceso fue rápido y transparente.",
    imagen: familia5,
  },
  {
    nombre: "Familia Gómez Flores",
    texto: "Excelente servicio y asesoría. Muy contentos con nuestra compra.",
    imagen: familia6,
  },
];

function FamiliaCard({
  familia,
  grupo,
  index,
}: {
  familia: (typeof familias)[number];
  grupo: string;
  index: number;
}) {
  return (
    <article className="familia-card" key={`${grupo}-${familia.nombre}-${index}`}>
      <img src={familia.imagen} alt={familia.nombre} />

      <div className="familia-content">
        <span className="familia-dot"></span>
        <h3>{familia.nombre}</h3>
        <p>{familia.texto}</p>
      </div>
    </article>
  );
}

export default function Testimonios() {
  return (
    <section id="testimonios" className="section testimonios-section">
      <div className="container section-inner">
        <div className="familias-box">
          <div className="familias-label">
            Familias que cumplieron el sueño de la casa propia
          </div>

          <p>
            Ya son <strong>+100 familias</strong> que son parte de este
            maravilloso proyecto
          </p>

          <h2>Conócelos</h2>
        </div>
      </div>

      <div className="familias-carousel">
        <div className="familias-track">
          <div className="familias-group">
            {familias.map((familia, index) => (
              <FamiliaCard
                key={`grupo-1-${familia.nombre}`}
                familia={familia}
                grupo="grupo-1"
                index={index}
              />
            ))}
          </div>

          <div className="familias-group" aria-hidden="true">
            {familias.map((familia, index) => (
              <FamiliaCard
                key={`grupo-2-${familia.nombre}`}
                familia={familia}
                grupo="grupo-2"
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}