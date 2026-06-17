import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Qué incluye la preventa de Villa Hermosa?",
    answer:
      "Incluye lotes con ubicación estratégica, financiamiento directo y asesoría personalizada en todo el proceso.",
  },
  {
    question: "¿Cuáles son las facilidades de pago?",
    answer:
      "Ofrecemos planes accesibles con financiamiento directo y opciones flexibles para tu presupuesto.",
  },
  {
    question: "¿Cómo aseguran la inversión?",
    answer:
      "Trabajamos con transparencia, documentación legal clara y proyectos ubicados en zonas con proyección.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section section-light brand-panel-section">
      <div className="container section-inner">
        <div className="section-title">
          <span>Preguntas y Respuestas</span>
          <h2>Resuelve tus dudas con claridad</h2>
          <p>
            Respondemos las preguntas más habituales sobre nuestros proyectos,
            financiamiento y el proceso de compra en AyT House Inmobiliaria.
          </p>
        </div>

        <div className="brand-panel faq-panel">
          <div className="brand-panel-badge">Preguntas frecuentes</div>

          <div className="faq-panel-grid">
            {faqs.map((item) => (
              <article key={item.question} className="faq-panel-card">
                <div className="faq-panel-icon">
                  <HelpCircle size={24} />
                </div>

                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}