export default function HowItWorksSection() {
  return (
    <section id="funciona">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Como funciona</span>
          <h2 className="section-title">Sem mistério antes da primeira sessão.</h2>
        </div>
        <div className="tcc-wrap reveal">
          <div>
            <div className="how-step">
              <span className="idx">1</span>
              <div>
                <h5>Você escolhe um horário</h5>
                <p>Vê a disponibilidade real de Agatha e marca sem precisar negociar por mensagem.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="idx">2</span>
              <div>
                <h5>Sessões de 50 min a 1h, 100% online</h5>
                <p>Em um ambiente acolhedor, ético e seguro, respeitando sua individualidade.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="idx">3</span>
              <div>
                <h5>Continuidade no seu ritmo</h5>
                <p>Um espaço de escuta, acolhimento e desenvolvimento emocional, sessão a sessão.</p>
              </div>
            </div>
          </div>
          <div className="tcc-box">
            <svg
              className="lineart"
              viewBox="0 0 220 180"
              style={{ width: 190, right: -30, bottom: -30, opacity: 0.18 }}
              fill="none"
              strokeWidth={2}
            >
              <path d="M70 40c-25 0-40 20-38 40-14 8-16 34 2 42-4 18 14 34 32 28 8 14 30 16 40 2 20 6 36-12 30-30 16-10 14-34-4-40 2-18-16-32-32-24-8-14-24-20-30-18z" />
              <path d="M110 40v92M70 80c14 6 22 2 30-8M78 128c10-8 22-10 32-4M148 62c-10 6-16 14-16 26" />
            </svg>
            <h4>O que é a TCC</h4>
            <p>
              A Terapia Cognitivo-Comportamental é uma abordagem baseada em evidências científicas, focada em
              compreender pensamentos, emoções e comportamentos, e desenvolver mudanças práticas e significativas
              para a vida emocional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
