import nodemailer from 'nodemailer'
import { ContactFormData } from '@/types'

// ─── SMTP Email Notification (Hostinger) ───────────────────────────────────

export async function sendEmailNotification(data: ContactFormData): Promise<void> {
  const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com'
  const smtpPort = parseInt(process.env.SMTP_PORT || '465')
  const smtpSecure = process.env.SMTP_SECURE !== 'false' // default true for port 465
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  if (!smtpUser || !smtpPass || smtpPass === 'YOUR_EMAIL_PASSWORD') {
    console.warn('[Email] SMTP credentials not configured, skipping email notification.')
    return
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const submittedAt = new Date().toLocaleString('en-AU', {
    timeZone: 'Australia/Brisbane',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body { font-family: Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 20px; }
        .card { background: #ffffff; border-radius: 12px; max-width: 560px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .header { background: linear-gradient(135deg, #1E88E5, #1565C0); padding: 28px 32px; }
        .header h1 { color: #fff; margin: 0; font-size: 22px; }
        .header p { color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px; }
        .body { padding: 28px 32px; }
        .row { margin-bottom: 16px; }
        .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #94a3b8; margin-bottom: 4px; }
        .value { font-size: 15px; color: #1e293b; font-weight: 500; }
        .message-box { background: #f8fafc; border-left: 4px solid #1E88E5; border-radius: 4px; padding: 14px 16px; font-size: 14px; color: #475569; line-height: 1.6; }
        .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; font-size: 12px; color: #94a3b8; text-align: center; }
        .badge { display: inline-block; background: #dbeafe; color: #1d4ed8; border-radius: 20px; padding: 3px 12px; font-size: 12px; font-weight: 600; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>🧹 New Cleaning Enquiry</h1>
          <p>Received on ${submittedAt} (Brisbane time)</p>
        </div>
        <div class="body">
          <div class="badge">⚡ New Lead — Reply within 2 hours</div>

          <div class="row">
            <div class="label">Full Name</div>
            <div class="value">${data.name}</div>
          </div>

          ${data.company_name ? `
          <div class="row">
            <div class="label">Company</div>
            <div class="value">${data.company_name}</div>
          </div>` : ''}

          <div class="row">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${data.email}" style="color:#1E88E5;">${data.email}</a></div>
          </div>

          <div class="row">
            <div class="label">Phone</div>
            <div class="value"><a href="tel:${data.phone}" style="color:#1E88E5;">${data.phone}</a></div>
          </div>

          ${data.address ? `
          <div class="row">
            <div class="label">Property Address</div>
            <div class="value">${data.address}</div>
          </div>` : ''}

          ${data.message ? `
          <div class="row">
            <div class="label">Message / Service Required</div>
            <div class="message-box">${data.message.replace(/\n/g, '<br/>')}</div>
          </div>` : ''}
        </div>
        <div class="footer">
          This notification was sent automatically from your Auswide Cleaning website.
        </div>
      </div>
    </body>
    </html>
  `

  const smtpFrom = process.env.SMTP_FROM || 'info@auswidecleaners.com'
  const smtpTo = 'auswide71@gmail.com'

  await transporter.sendMail({
    from: `"Auswide Cleaning Website" <${smtpFrom}>`,
    to: smtpTo,
    subject: `🧹 New Enquiry from ${data.name} — Auswide Cleaning`,
    html: htmlBody,
    replyTo: data.email,
  })

  console.log('[Email] Notification sent to', smtpTo)
}

// ─── WhatsApp Notification via CallMeBot ───────────────────────────────────

export async function sendWhatsAppNotification(data: ContactFormData): Promise<void> {
  const phone = process.env.CALLMEBOT_PHONE
  const apiKey = process.env.CALLMEBOT_API_KEY

  if (!phone || !apiKey || apiKey === 'your_callmebot_api_key_here') {
    console.warn('[WhatsApp] CallMeBot not configured, skipping WhatsApp notification.')
    return
  }

  const submittedAt = new Date().toLocaleString('en-AU', {
    timeZone: 'Australia/Brisbane',
    dateStyle: 'short',
    timeStyle: 'short',
  })

  const lines = [
    `🧹 *New Enquiry - Auswide Cleaning*`,
    `📅 ${submittedAt}`,
    ``,
    `👤 *Name:* ${data.name}`,
    data.company_name ? `🏢 *Company:* ${data.company_name}` : null,
    `📧 *Email:* ${data.email}`,
    `📞 *Phone:* ${data.phone}`,
    data.address ? `📍 *Address:* ${data.address}` : null,
    data.message ? `` : null,
    data.message ? `💬 *Message:*` : null,
    data.message ?? null,
  ]
    .filter(Boolean)
    .join('\n')

  // CallMeBot API requires URL-encoded message
  const encoded = encodeURIComponent(lines)
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encoded}&apikey=${apiKey}`

  const response = await fetch(url)

  if (!response.ok) {
    console.error('[WhatsApp] CallMeBot request failed:', response.status, await response.text())
  } else {
    console.log('[WhatsApp] Notification sent to', phone)
  }
}
