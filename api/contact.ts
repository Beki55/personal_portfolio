import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sendMail } from "../src/utils/mailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing fields" });
    return;
  }
  try {
    await sendMail({
      to: process.env.CONTACT_RECEIVER_EMAIL || "bereket21bnm@gmail.com",
      subject: `Portfolio Contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: "Failed to send email" });
  }
}
