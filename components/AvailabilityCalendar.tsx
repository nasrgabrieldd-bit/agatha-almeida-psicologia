"use client";

import { useEffect, useState } from "react";

type AvailabilityData = {
  month: string;
  firstWeekday: number;
  daysInMonth: number;
  workHours: string[];
  availableDays: number[];
  bookedByDay: Record<string, string[]>;
  illustrative: boolean;
};

export default function AvailabilityCalendar() {
  const [data, setData] = useState<AvailabilityData | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/availability")
      .then((res) => res.json())
      .then((json: AvailabilityData) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!data) {
    return (
      <div className="cal-card reveal" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
        <p style={{ margin: 0, color: "var(--ink-faint)", fontSize: 13.5 }}>Carregando agenda...</p>
      </div>
    );
  }

  const cells: Array<number | null> = [
    ...Array(data.firstWeekday).fill(null),
    ...Array.from({ length: data.daysInMonth }, (_, i) => i + 1),
  ];
  const busyForSelected = selectedDay ? data.bookedByDay[String(selectedDay)] ?? [] : [];

  return (
    <>
      <div className="cal-card reveal" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
        <div className="cal-head">
          <button aria-label="mês anterior" type="button">
            ‹
          </button>
          <span>{data.month}</span>
          <button aria-label="próximo mês" type="button">
            ›
          </button>
        </div>
        <div className="cal-week">
          <span>D</span>
          <span>S</span>
          <span>T</span>
          <span>Q</span>
          <span>Q</span>
          <span>S</span>
          <span>S</span>
        </div>
        <div className="cal-grid">
          {cells.map((day, i) => {
            if (day === null) return <div className="cal-day empty" key={`empty-${i}`} />;
            const avail = data.availableDays.includes(day);
            const sel = selectedDay === day;
            return (
              <button
                key={day}
                type="button"
                className={`cal-day${avail ? " avail" : ""}${sel ? " sel" : ""}`}
                onClick={avail ? () => setSelectedDay(day) : undefined}
                disabled={!avail}
              >
                {day}
              </button>
            );
          })}
        </div>
        <div className="cal-legend">
          <span>
            <i className="dot on"></i> dia com horários
          </span>
          <span>
            <i className="dot off"></i> sem disponibilidade
          </span>
        </div>
        {selectedDay && (
          <div className="slots">
            <h5>Horários em {selectedDay} de setembro</h5>
            <p className="work-window">Atendimento das 08:00 às 18:00. Horários riscados já estão ocupados.</p>
            <div className="slot-list">
              {data.workHours.map((t) => {
                const busy = busyForSelected.includes(t);
                return (
                  <span key={t} className={`slot${busy ? " busy" : ""}`}>
                    {t}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <p className="privacy-note" style={{ marginLeft: "auto", marginRight: "auto" }}>
        <strong>Você vê apenas se há vaga ou não.</strong> Nomes, motivos e detalhes de outros atendimentos nunca
        aparecem aqui, em nenhuma hipótese.
      </p>
      {data.illustrative && (
        <p className="illustrative">dados ilustrativos. a integração real com o Google Agenda entra na fase de desenvolvimento</p>
      )}
    </>
  );
}
