import { useState } from "react";
import logoNuevo from "../assets/logonuevo2.png";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Condominio Villa Hermosa", href: "/villa-hermosa" },
  { label: "Preguntas", href: "/preguntas" },
  { label: "Ubícanos", href: "/ubicacion" },
  { label: "Contáctanos", href: "/contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header header-premium">
      <div className="top-bar">
        <div className="top-bar-message">
          “Construimos oportunidades, hogares y futuro para tu familia”
        </div>
      </div>

      <div className="navbar-premium">
        <a
          href="/"
          className="brand-premium"
          onClick={() => setMenuOpen(false)}
          aria-label="Ir al inicio"
        >
          <img
            src={logoNuevo}
            alt="A&T House Inmobiliaria"
            className="brand-logo-new"
          />
        </a>

        <div className="header-premium-actions">
          <a
            className="btn-lotes"
            href="/#plano-general"
            onClick={() => setMenuOpen(false)}
          >
            <span className="btn-lotes-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 19V5C4 4.45 4.45 4 5 4H14L20 10V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M14 4V10H20" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M8 15L11 12L13 14L16 11"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            Terrenos disponibles aquí
          </a>

          <button
            className={`menu-premium-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            type="button"
          >
            Menú
            <span className="menu-premium-arrow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        <nav className={`nav-menu-premium ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}