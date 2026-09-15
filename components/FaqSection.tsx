export default function FaqSection() {
  return (
    <section id="faq">
      <div className="wrap" style={{ maxWidth: "70ch" }}>
        <div className="section-head reveal">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="section-title">Antes de marcar, algumas respostas.</h2>
        </div>
        <div className="reveal">
          <details className="faq-item" open>
            <summary>Preciso estar em crise para começar terapia?</summary>
            <p>
              Não. Terapia também é espaço para autoconhecimento, prevenção e fortalecimento emocional, não só
              para momentos de crise.
            </p>
          </details>
          <details className="faq-item">
            <summary>Como funciona o sigilo no atendimento online?</summary>
            <p>
              O conteúdo das sessões é confidencial, conforme o Código de Ética da Psicologia, com sessões por
              videochamada seguindo boas práticas de privacidade.
            </p>
          </details>
          <details className="faq-item">
            <summary>Como funcionam os valores?</summary>
            <p>
              Conversamos sobre o investimento no primeiro contato, junto com a modalidade que melhor se encaixa
              no seu momento.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
