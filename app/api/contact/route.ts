import { NextResponse } from "next/server";

/**
 * Stub contact endpoint. Only logs the submission for now, no clinical
 * information is ever collected here on purpose (LGPD, see the discovery
 * doc's section on data minimization). Wiring this to a real email send
 * (e.g. Resend) is a backend-only follow-up, the form on the page already
 * talks to this route.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.nome !== "string" || typeof body.email !== "string") {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  console.log("[contato] nova mensagem recebida:", {
    nome: body.nome,
    email: body.email,
    mensagem: typeof body.mensagem === "string" ? body.mensagem : "",
  });

  return NextResponse.json({ ok: true });
}
