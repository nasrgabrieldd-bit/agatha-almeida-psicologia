import AvailabilityCalendar from "./AvailabilityCalendar";

export default function AvailabilitySection() {
  return (
    <section id="disponibilidade">
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="section-head reveal" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Disponibilidade
          </span>
          <h2 className="section-title">Veja quais dias têm vaga, sem precisar perguntar.</h2>
          <p style={{ marginLeft: "auto", marginRight: "auto" }}>
            Conectado ao Google Agenda da Agatha. Pacientes novos e em acompanhamento contínuo consultam a mesma
            visualização.
          </p>
        </div>
        <AvailabilityCalendar />
      </div>
    </section>
  );
}
