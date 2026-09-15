export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="wrap">
        <div className="eyebrow">Psicóloga clínica · CRP 06/203584</div>
        <div className="headline-flip reveal" id="headlineFlip">
          <div className="headline-inner">
            <div className="headline-face">
              <h1 className="headline">Cuidar da mente é um ato de coragem.</h1>
            </div>
            <div className="headline-face headline-back">
              <p className="headline-teaser">
                Sou a Agatha. Um espaço acolhedor e seguro para você se entender e seguir mais leve.
              </p>
            </div>
          </div>
        </div>
        <div className="headline-hint">passe o mouse ou toque na frase</div>
        <p className="sub reveal">
          Psicoterapia online com Terapia Cognitivo-Comportamental, para mulheres que enfrentam ansiedade,
          autoestima e desafios emocionais do dia a dia.
        </p>
        <div className="cta-row reveal">
          <a className="btn btn-gold" href="#disponibilidade">
            Ver disponibilidade
          </a>
          <a className="btn btn-outline-light" href="#contato">
            Falar no WhatsApp
          </a>
        </div>
        <div className="scrolldown">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          conheça a Agatha
        </div>
      </div>
    </section>
  );
}
