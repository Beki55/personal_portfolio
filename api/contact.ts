import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

// Export a function that sends the email, receiving the form data as props
export async function sendContactMail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  // Direct SMTP config (replace with your SMTP provider's details)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "bereketmelese342@gmail.com",
      pass: "mhlb nfgp fnpr lkne", // Use an app password, NOT your Gmail password
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: "bereketmelese342@gmail.com",
    subject: `Portfolio Contact from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    replyTo: email,
  });
}

// If you still want to use this file as an API route handler:
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
    await sendContactMail({ name, email, message });
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: "Failed to send email" });
  }
}
