import { CreditCard, MapPin, ShieldCheck, TrendingUp } from "lucide-react";

const beneficios = [
  {
    icon: <MapPin size={30} />,
    title: "Ubicación estratégica",
    text: "Proyecto ubicado en una zona con proyección de crecimiento y alto potencial de valorización.",
  },
  {
    icon: <CreditCard size={30} />,
    title: "Facilidades de pago",
    text: "Opciones accesibles para que más familias puedan iniciar su inversión inmobiliaria.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Asesoría personalizada",
    text: "Te acompañamos en cada etapa del proceso con información clara y atención profesional.",
  },
  {
    icon: <TrendingUp size={30} />,
    title: "Inversión segura",
    text: "Un proyecto con visión de crecimiento, respaldo comercial y enfoque familiar.",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="beneficios-premium-section">
      <div className="container beneficios-premium-inner">
        <div className="section-title beneficios-title">
          <span>Beneficios</span>
          <h2>Ventajas de invertir con A&T House Inmobiliaria</h2>
          <p>
            Una propuesta pensada para familias e inversionistas que buscan
            seguridad, crecimiento y respaldo en cada decisión.
          </p>
        </div>

        <div className="beneficios-premium-panel">
          <div className="beneficios-panel-label">
            Beneficios que impulsan tu inversión
          </div>

          <div className="beneficios-panel-intro">
            <span>01</span>
            <h3>Invierte con confianza, respaldo y visión de futuro</h3>
            <p>
              En A&T House Inmobiliaria te brindamos orientación profesional,
              proyectos con potencial y un acompañamiento claro para que tomes
              una mejor decisión.
            </p>
          </div>

          <div className="beneficios-panel-grid">
            {beneficios.map((item, index) => (
              <article className="beneficio-premium-card" key={item.title}>
                <div className="beneficio-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="beneficio-card-icon">{item.icon}</div>

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