# Agatha Almeida Psicologia

Site institucional da psicóloga Agatha Almeida (Next.js + TypeScript).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Estado atual

- Design, textos e interações vieram do protótipo validado em Artifact (Discovery e várias rodadas de ajuste).
- A foto em `public/agatha-placeholder.jpg` é um teste de baixa resolução, será trocada por fotos profissionais.
- `/api/availability` retorna dados **ilustrativos** de agenda (jornada 08:00-18:00, sessão fixa toda quinta às 13:00). A integração real com o Google Agenda entra aqui depois, sem precisar mudar o componente do calendário.
- `/api/contact` só registra a mensagem no log do servidor por enquanto. Falta ligar a um serviço de e-mail antes de ir para produção.
- Sem banco de dados (Supabase) por decisão consciente: nada no site hoje precisa de armazenamento persistente.

## Próximos passos

1. Conectar a agenda real da Agatha (ver seção 17 do documento de discovery: Google Calendar Appointment Schedule).
2. Ligar `/api/contact` a um serviço de e-mail (ex: Resend).
3. Substituir a foto placeholder pelas fotos profissionais.
4. Deploy na Vercel (conectar este repositório pelo painel da Vercel).
