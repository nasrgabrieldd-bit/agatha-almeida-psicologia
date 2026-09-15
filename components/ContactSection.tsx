"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.get("nome"),
          email: data.get("email"),
          mensagem: data.get("mensagem"),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="formulario">
      <div className="wrap" style={{ maxWidth: 560 }}>
        <div className="section-head reveal">
          <span className="eyebrow">Contato</span>
          <h2 className="section-title">Prefere escrever? Deixe seu contato por aqui.</h2>
          <p>Só o essencial. Nada sobre o motivo da consulta precisa ser contado agora.</p>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Nome
              <input type="text" name="nome" required />
            </label>
            <label>
              E-mail
              <input type="email" name="email" required />
            </label>
          </div>
          <label>
            Mensagem (opcional)
            <textarea name="mensagem" rows={3} placeholder="Se quiser, deixe uma mensagem curta." />
          </label>
          <button className="btn btn-gold" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>
          {status === "sent" && (
            <p style={{ marginTop: 14, fontSize: 13.5, color: "var(--emerald)" }}>
              Mensagem enviada. A Agatha vai receber por e-mail.
            </p>
          )}
          {status === "error" && (
            <p style={{ marginTop: 14, fontSize: 13.5, color: "var(--emerald)" }}>
              Não foi possível enviar agora, tente novamente em instantes.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
