import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const LOGO_URL = 'https://www.rawformato.com/logo.png';

function teamNotificationEmail(name: string, email: string, company: string, industry: string, message: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 32px 16px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
              <!-- Header -->
              <tr>
                <td style="background-color: #0B0B0E; padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
                  <img src="${LOGO_URL}" alt="RAW Formato" width="140" style="display: block; margin: 0 auto;" />
                </td>
              </tr>
              <!-- Badge -->
              <tr>
                <td style="background-color: #ffffff; padding: 32px 32px 0 32px;">
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background-color: #0B0B0E; color: #ffffff; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 6px 14px; border-radius: 100px;">
                        New Lead
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Content -->
              <tr>
                <td style="background-color: #ffffff; padding: 24px 32px 32px 32px;">
                  <h1 style="margin: 0 0 24px 0; font-size: 22px; color: #0B0B0E;">
                    ${name} sent a message
                  </h1>
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                    <tr>
                      <td style="padding: 14px 0; border-bottom: 1px solid #e4e4e7;">
                        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #a1a1aa; display: block; margin-bottom: 4px;">Name</span>
                        <span style="font-size: 15px; color: #0B0B0E; font-weight: 500;">${name}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 14px 0; border-bottom: 1px solid #e4e4e7;">
                        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #a1a1aa; display: block; margin-bottom: 4px;">Email</span>
                        <a href="mailto:${email}" style="font-size: 15px; color: #0B0B0E; font-weight: 500; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                    ${company ? `
                    <tr>
                      <td style="padding: 14px 0; border-bottom: 1px solid #e4e4e7;">
                        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #a1a1aa; display: block; margin-bottom: 4px;">Company</span>
                        <span style="font-size: 15px; color: #0B0B0E; font-weight: 500;">${company}</span>
                      </td>
                    </tr>
                    ` : ''}
                    ${industry ? `
                    <tr>
                      <td style="padding: 14px 0; border-bottom: 1px solid #e4e4e7;">
                        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #a1a1aa; display: block; margin-bottom: 4px;">Industry</span>
                        <span style="font-size: 15px; color: #0B0B0E; font-weight: 500;">${industry}</span>
                      </td>
                    </tr>
                    ` : ''}
                    ${message ? `
                    <tr>
                      <td style="padding: 14px 0;">
                        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #a1a1aa; display: block; margin-bottom: 4px;">Message</span>
                        <span style="font-size: 15px; color: #0B0B0E; line-height: 1.6;">${message}</span>
                      </td>
                    </tr>
                    ` : ''}
                  </table>
                  <!-- Reply Button -->
                  <table cellpadding="0" cellspacing="0" style="margin-top: 28px;">
                    <tr>
                      <td style="background-color: #0B0B0E; border-radius: 8px;">
                        <a href="mailto:${email}" style="display: inline-block; padding: 14px 28px; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none;">
                          Reply to ${name}
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="background-color: #fafafa; padding: 20px 32px; border-radius: 0 0 12px 12px; border-top: 1px solid #e4e4e7;">
                  <p style="margin: 0; font-size: 12px; color: #a1a1aa; text-align: center;">
                    Sent from the contact form at rawformato.com
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

function userConfirmationEmail(name: string, message: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 32px 16px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
              <!-- Header -->
              <tr>
                <td style="background-color: #0B0B0E; padding: 40px 32px; border-radius: 12px 12px 0 0; text-align: center;">
                  <img src="${LOGO_URL}" alt="RAW Formato" width="160" style="display: block; margin: 0 auto 24px auto;" />
                  <h1 style="margin: 0; font-size: 24px; color: #ffffff; font-weight: 600;">
                    Thanks for reaching out, ${name}!
                  </h1>
                </td>
              </tr>
              <!-- Content -->
              <tr>
                <td style="background-color: #ffffff; padding: 36px 32px;">
                  <p style="margin: 0 0 20px 0; font-size: 16px; color: #3f3f46; line-height: 1.7;">
                    We've received your message and our team will review it shortly. You can expect to hear from us within <strong style="color: #0B0B0E;">24 hours</strong>.
                  </p>
                  ${message ? `
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin: 28px 0;">
                    <tr>
                      <td style="background-color: #fafafa; padding: 20px 24px; border-radius: 10px; border-left: 3px solid #0B0B0E;">
                        <p style="margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #a1a1aa; font-weight: 600;">Your message</p>
                        <p style="margin: 0; font-size: 14px; color: #3f3f46; line-height: 1.6;">${message}</p>
                      </td>
                    </tr>
                  </table>
                  ` : ''}
                  <p style="margin: 0 0 8px 0; font-size: 16px; color: #3f3f46; line-height: 1.7;">
                    In the meantime, check out our latest work:
                  </p>
                  <!-- Instagram Button -->
                  <table cellpadding="0" cellspacing="0" style="margin-top: 20px;">
                    <tr>
                      <td style="background-color: #0B0B0E; border-radius: 8px;">
                        <a href="https://instagram.com/rawformato" style="display: inline-block; padding: 14px 28px; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none;">
                          @rawformato on Instagram
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="background-color: #0B0B0E; padding: 28px 32px; border-radius: 0 0 12px 12px; text-align: center;">
                  <p style="margin: 0 0 8px 0; font-size: 13px; color: #a1a1aa;">
                    RAW Formato | Creative Marketing Agency
                  </p>
                  <a href="https://www.rawformato.com" style="font-size: 12px; color: #71717a; text-decoration: none;">
                    www.rawformato.com
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

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
      resend.emails.send({
        from: 'RAW Formato <hello@rawformato.com>',
        to: 'rawformato.web@gmail.com',
        replyTo: email,
        subject: `New contact from ${name}${company ? ` (${company})` : ''}`,
        html: teamNotificationEmail(name, email, company, industry, message),
      }),
      resend.emails.send({
        from: 'RAW Formato <hello@rawformato.com>',
        to: email,
        subject: `We received your message, ${name}!`,
        html: userConfirmationEmail(name, message),
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
