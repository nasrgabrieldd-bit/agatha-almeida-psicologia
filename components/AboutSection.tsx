export default function AboutSection() {
  return (
    <section id="sobre" style={{ borderTop: "none" }}>
      <div className="wrap about-grid">
        <div className="parallax" data-parallax="18">
          <div className="arch-flip reveal-scale">
            <div className="arch-inner">
              <div className="arch-face arch-front">
                <div className="photo-note">foto de teste em baixa resolução. hero final usa retrato em alta</div>
              </div>
              <div className="arch-face arch-back">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: 26, height: 26, top: "16%", left: "20%" }}
                >
                  <path d="M12 0l1.9 8.1L22 10l-8.1 1.9L12 20l-1.9-8.1L2 10l8.1-1.9L12 0z" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: 16, height: 16, bottom: "20%", right: "22%" }}
                >
                  <path d="M12 0l1.9 8.1L22 10l-8.1 1.9L12 20l-1.9-8.1L2 10l8.1-1.9L12 0z" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: 36, height: 36, top: "50%", left: "50%", marginTop: -18, marginLeft: -18 }}
                >
                  <path d="M12 20.6c-.3 0-.6-.1-.8-.3-1.6-1.4-3.2-2.7-4.6-4C4 13.9 2 11.6 2 8.9 2 6.2 4.1 4 6.7 4c1.4 0 2.8.7 3.7 1.8.4.5.9.5 1.2 0C12.5 4.7 13.9 4 15.3 4 17.9 4 20 6.2 20 8.9c0 2.7-2 5-4.6 7.4-1.4 1.3-3 2.6-4.6 4-.2.2-.5.3-.8.3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="about-copy reveal-right">
          <span className="eyebrow">Quem é a Agatha</span>
          <h2 className="section-title">Um espaço seguro para explorar suas emoções.</h2>
          <p>
            Sou psicóloga clínica e atuo através da Terapia Cognitivo-Comportamental, abordagem que une
            acolhimento, ciência e estratégias práticas para o cuidado com a saúde emocional.
          </p>
          <p>
            Meu trabalho é direcionado a adultos e mulheres que enfrentam ansiedade, autoestima, insegurança,
            fobia social e autocobrança no dia a dia.
          </p>
          <p className="crp">CRP 06/203584</p>
        </div>
      </div>
    </section>
  );
}
