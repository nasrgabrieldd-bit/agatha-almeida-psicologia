const cards = [
  {
    title: "Ansiedade",
    text: "Pensamentos acelerados, tensão constante, dificuldade de desligar.",
    more: "Se sua mente parece nunca descansar, a terapia ajuda a identificar os gatilhos e reduzir a sensação de alerta constante.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.2" />
        <path d="M6 12h3l1.6-4.5L13 16l1.4-4H18" />
      </svg>
    ),
  },
  {
    title: "Autoestima e insegurança",
    text: "Autocobrança, sensação de nunca ser suficiente.",
    more: "Trabalhamos juntas para você se relacionar consigo mesma com mais gentileza e menos julgamento.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.2" />
        <path d="M12 15.6s-4-2.4-4-5.2c0-1.5 1.2-2.6 2.6-2.6 .7 0 1.4.3 1.4.9 0-.6.7-.9 1.4-.9 1.4 0 2.6 1.1 2.6 2.6 0 2.8-4 5.2-4 5.2z" />
      </svg>
    ),
  },
  {
    title: "Fobia social",
    text: "Medo de julgamento, desconforto em interações.",
    more: "Um espaço para entender esse medo e, aos poucos, ampliar o que é possível para você.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.2" />
        <circle cx="9" cy="10.5" r="2.3" />
        <circle cx="15.5" cy="10.5" r="2.3" />
        <path d="M5.3 16.5c.6-1.8 2-2.9 3.7-2.9M18.7 16.5c-.6-1.8-2-2.9-3.7-2.9" />
      </svg>
    ),
  },
  {
    title: "Autocobrança",
    text: "O ciclo de nunca sentir que fez o suficiente.",
    more: "A TCC ajuda a identificar esse padrão de pensamento e construir critérios mais justos consigo mesma.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.2" />
        <circle cx="12" cy="12" r="5.4" />
        <circle cx="12" cy="12" r="1.6" />
      </svg>
    ),
  },
];

export default function WhoForSection() {
  return (
    <section id="quem">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Para quem é</span>
          <h2 className="section-title">Um espaço pensado para o que você sente hoje.</h2>
        </div>
        <div className="bento reveal">
          {cards.map((c) => (
            <div className="icon-card" key={c.title}>
              <div className="icon-badge">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
              <p className="more">{c.more}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
