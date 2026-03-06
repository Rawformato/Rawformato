import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, industry, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    await Promise.all([
      // Notification to the team
      resend.emails.send({
        from: 'RAW Formato <hello@rawformato.com>',
        to: 'rawformato.web@gmail.com',
        replyTo: email,
        subject: `New contact from ${name}${company ? ` (${company})` : ''}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${industry ? `<p><strong>Industry:</strong> ${industry}</p>` : ''}
          ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
        `,
      }),
      // Confirmation to the user
      resend.emails.send({
        from: 'RAW Formato <hello@rawformato.com>',
        to: email,
        subject: `We received your message, ${name}!`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0B0B0E;">Thanks for reaching out, ${name}!</h2>
            <p style="color: #333; line-height: 1.6;">
              We've received your message and our team will get back to you within 24 hours.
            </p>
            ${message ? `
              <div style="margin: 24px 0; padding: 16px; background: #f5f5f5; border-radius: 8px;">
                <p style="margin: 0 0 4px; font-size: 12px; color: #666; text-transform: uppercase;">Your message</p>
                <p style="margin: 0; color: #333;">${message}</p>
              </div>
            ` : ''}
            <p style="color: #333; line-height: 1.6;">
              In the meantime, feel free to check out our work on
              <a href="https://instagram.com/rawformato" style="color: #0B0B0E; font-weight: 600;">Instagram</a>.
            </p>
            <p style="color: #999; font-size: 13px; margin-top: 32px;">
              — The RAW Formato Team
            </p>
          </div>
        `,
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
