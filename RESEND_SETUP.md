# Email Integration with Resend

This project is ready to integrate with Resend for contact form submissions.

## Setup Instructions

### 1. Install Resend

```bash
npm install resend
```

### 2. Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Get your API key from the dashboard

### 3. Create an API Route

Create a file at `/api/contact.ts` or `/api/contact/route.ts` (depending on your backend setup):

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, industry, message } = await request.json();

    const data = await resend.emails.send({
      from: 'RAW Formato <hello@rawformato.com>',
      to: ['your-email@example.com'], // Replace with your email
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Industry:</strong> ${industry || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
```

### 4. Environment Variables

Add to your `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### 5. Domain Verification (Optional but Recommended)

To send emails from your custom domain:

1. Go to Resend dashboard
2. Add and verify your domain
3. Update the `from` email in the API route to use your verified domain

## Alternative: Serverless Function (Vercel)

If deploying to Vercel, create `/api/contact.js`:

```javascript
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, industry, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'RAW Formato <hello@rawformato.com>',
      to: ['your-email@example.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Industry:</strong> ${industry || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

## Testing

1. Run your development server
2. Fill out the contact form
3. Check your email inbox
4. Verify the email was received

## Troubleshooting

- **CORS errors**: Make sure your API route is on the same domain or configure CORS properly
- **API key not working**: Verify the key in Resend dashboard and `.env.local`
- **Emails not arriving**: Check spam folder and verify your domain is verified in Resend

## Rate Limits

Free tier includes:
- 100 emails/day
- 3,000 emails/month

For production, consider upgrading to a paid plan.
