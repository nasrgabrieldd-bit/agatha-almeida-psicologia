export default function SiteHeader() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            className="logo-mark"
          >
            <path d="M12 21V10" />
            <path d="M12 10C12 5 8 3 4 3c0 5 3 8 8 7z" />
            <path d="M12 13C12 9 15 7 19 7c0 4-2.5 6.5-7 6z" />
          </svg>
          Agatha Almeida
        </div>
        <nav className="links" id="navLinks">
          <a href="#sobre">Sobre</a>
          <a href="#quem">Para quem é</a>
          <a href="#disponibilidade">Disponibilidade</a>
          <a href="#faq">Perguntas</a>
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Alternar entre modo claro e escuro"
            type="button"
          >
            <svg
              className="icon-sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
            </svg>
            <svg className="icon-moon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
            </svg>
          </button>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Abrir menu"
            aria-expanded="false"
            aria-controls="navLinks"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
          <a className="btn btn-gold" href="#disponibilidade">
            Ver disponibilidade
          </a>
        </div>
      </div>
    </header>
  );
}
