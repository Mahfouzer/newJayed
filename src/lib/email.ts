import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

export const QuoteSchema = z.object({
  projectType: z.string().min(1),
  hasDesign: z.string().min(1),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  name: z.string().min(1),
  email: z.email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  notes: z.string().optional(),
})

export type QuoteData = z.infer<typeof QuoteSchema>

// ─── HTML templates ────────────────────────────────────────────────────────────

function internalTemplate(data: QuoteData): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #2E1825;vertical-align:top;">
        <span style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#7A5060;">${label}</span>
      </td>
      <td style="padding:12px 0 12px 24px;border-bottom:1px solid #2E1825;vertical-align:top;">
        <span style="font-size:14px;color:#FFE8D6;font-weight:500;">${value}</span>
      </td>
    </tr>
  `

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#0D0608;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0D0608;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#1E101A 0%,#2E1825 100%);border-radius:16px 16px 0 0;padding:32px 40px;border-bottom:1px solid #F55E00;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span style="font-size:22px;font-weight:800;color:#FFE8D6;letter-spacing:-0.02em;">Jayed Studio</span>
                <span style="font-size:22px;font-weight:800;color:#F55E00;margin-left:6px;">· چيد</span>
              </td>
              <td align="right">
                <span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#F55E00;font-size:11px;font-weight:700;color:#fff;letter-spacing:0.06em;text-transform:uppercase;">New Quote</span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Body -->
        <tr><td style="background-color:#120A0E;padding:40px;">

          <p style="margin:0 0 8px;font-size:24px;font-weight:700;color:#FFE8D6;letter-spacing:-0.01em;">New quotation request</p>
          <p style="margin:0 0 32px;font-size:14px;color:#7A5060;">Submitted by ${data.email}</p>

          <table width="100%" cellpadding="0" cellspacing="0">
            ${row('Name', data.name)}
            ${row('Email', `<a href="mailto:${data.email}" style="color:#F55E00;text-decoration:none;">${data.email}</a>`)}
            ${data.company ? row('Company', data.company) : ''}
            ${data.phone ? row('Phone / WhatsApp', data.phone) : ''}
            ${row('Project type', data.projectType)}
            ${row('Design status', data.hasDesign)}
            ${row('Budget', data.budget)}
            ${row('Timeline', data.timeline)}
            ${row('Notes', data.notes || '<span style="color:#462035;font-style:italic;">None provided</span>')}
          </table>

          <!-- Reply CTA -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:36px;">
            <tr><td>
              <a href="mailto:${data.email}?subject=Re: Your Jayed Studio Quote Request&body=Hi there,%0A%0AThanks for reaching out. Here's your quote..."
                style="display:inline-block;padding:14px 28px;background:linear-gradient(135deg,#F55E00,#E8003D);color:#fff;font-size:14px;font-weight:700;text-decoration:none;border-radius:999px;">
                Reply to ${data.email} →
              </a>
            </td></tr>
          </table>

        </td></tr>

        <!-- Footer -->
        <tr><td style="background-color:#0D0608;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;border-top:1px solid #1E101A;">
          <p style="margin:0;font-size:11px;color:#462035;">Jayed Studio · mahfouzer@jayed.studio · jayed.studio</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim()
}

function customerTemplate(data: QuoteData): string {
  const item = (label: string, value: string) => `
    <tr>
      <td style="padding:14px 20px;border-bottom:1px solid #f0f0f0;width:40%;">
        <span style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#8a9bb0;">${label}</span>
      </td>
      <td style="padding:14px 20px;border-bottom:1px solid #f0f0f0;">
        <span style="font-size:14px;color:#1a1a2e;font-weight:500;">${value || ' - '}</span>
      </td>
    </tr>
  `

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#f4f6fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6fa;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#1a0d12 0%,#2d1020 100%);border-radius:16px 16px 0 0;padding:36px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span style="font-size:22px;font-weight:800;color:#ffe8d6;letter-spacing:-0.02em;">Jayed Studio</span>
                <span style="font-size:22px;font-weight:800;color:#F55E00;margin-left:6px;">· چيد</span>
              </td>
            </tr>
            <tr><td style="padding-top:24px;">
              <p style="margin:0;font-size:28px;font-weight:800;color:#ffffff;line-height:1.2;letter-spacing:-0.02em;">We've got<br>your request.</p>
              <p style="margin:12px 0 0;font-size:15px;color:#c4a090;line-height:1.6;">You'll hear from us within 24 hours with a straight quotation - a real number and a real timeline.</p>
            </td></tr>
          </table>
        </td></tr>

        <!-- Orange accent bar -->
        <tr><td style="height:4px;background:linear-gradient(90deg,#F55E00,#E8003D);"></td></tr>

        <!-- What you told us -->
        <tr><td style="background:#ffffff;padding:36px 40px 0;">
          <p style="margin:0 0 20px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#8a9bb0;">Your submission</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0f0f0;border-radius:12px;overflow:hidden;">
            ${item('Project type', data.projectType)}
            ${item('Design status', data.hasDesign)}
            ${item('Budget', data.budget)}
            ${item('Timeline', data.timeline)}
            ${item('Notes', data.notes || '')}
          </table>
        </td></tr>

        <!-- What happens next -->
        <tr><td style="background:#ffffff;padding:32px 40px;">
          <p style="margin:0 0 16px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#8a9bb0;">What happens next</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="vertical-align:top;padding-bottom:14px;width:28px;">
                <span style="display:inline-block;width:20px;height:20px;border-radius:50%;background:#F55E00;color:#fff;font-size:11px;font-weight:700;text-align:center;line-height:20px;">1</span>
              </td>
              <td style="vertical-align:top;padding-bottom:14px;padding-left:12px;">
                <span style="font-size:14px;color:#1a1a2e;font-weight:600;">We review your request personally</span>
                <p style="margin:4px 0 0;font-size:13px;color:#6b7280;">No bots, no auto-responses. A real person reads every submission.</p>
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;padding-bottom:14px;width:28px;">
                <span style="display:inline-block;width:20px;height:20px;border-radius:50%;background:#F55E00;color:#fff;font-size:11px;font-weight:700;text-align:center;line-height:20px;">2</span>
              </td>
              <td style="vertical-align:top;padding-bottom:14px;padding-left:12px;">
                <span style="font-size:14px;color:#1a1a2e;font-weight:600;">You get a straight quotation within 24 hours</span>
                <p style="margin:4px 0 0;font-size:13px;color:#6b7280;">A real price and a real timeline - no vague "let's jump on a call" responses.</p>
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;width:28px;">
                <span style="display:inline-block;width:20px;height:20px;border-radius:50%;background:#F55E00;color:#fff;font-size:11px;font-weight:700;text-align:center;line-height:20px;">3</span>
              </td>
              <td style="vertical-align:top;padding-left:12px;">
                <span style="font-size:14px;color:#1a1a2e;font-weight:600;">If it's not a good fit, we'll say so</span>
                <p style="margin:4px 0 0;font-size:13px;color:#6b7280;">We don't pitch or upsell. If you don't need something, we won't sell it to you.</p>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Contact -->
        <tr><td style="background:#fafbfd;border-top:1px solid #f0f0f0;border-radius:0;padding:24px 40px;text-align:center;">
          <p style="margin:0;font-size:13px;color:#6b7280;">Questions? Reply to this email or reach us at <a href="mailto:info@jayed.studio" style="color:#F55E00;text-decoration:none;font-weight:600;">info@jayed.studio</a></p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f4f6fa;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
          <p style="margin:0;font-size:11px;color:#9ca3af;">© 2026 Jayed Studio · Building what matters, shipping what works.</p>
          <p style="margin:6px 0 0;font-size:11px;color:#9ca3af;">
            <a href="https://jayed.studio" style="color:#F55E00;text-decoration:none;">jayed.studio</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim()
}

// ─── Server function ────────────────────────────────────────────────────────────

export const submitQuote = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => QuoteSchema.parse(data))
  .handler(async ({ data }) => {
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send both emails in parallel
    const [internal, customer] = await Promise.all([
      // 1. Internal notification to Mahfouzer
      resend.emails.send({
        from: 'info@jayed.studio',
        to: 'mahfouzer@jayed.studio',
        replyTo: data.email,
        subject: `New Quote - ${data.projectType} · ${data.timeline}`,
        html: internalTemplate(data),
      }),

      // 2. Customer confirmation with copy of their data
      resend.emails.send({
        from: 'Jayed Studio <info@jayed.studio>',
        to: data.email,
        replyTo: 'info@jayed.studio',
        subject: `Got it - your quote request is with us`,
        html: customerTemplate(data),
      }),
    ])

    if (internal.error) console.error('[Resend] internal:', internal.error)
    if (customer.error) console.error('[Resend] customer:', customer.error)

    return { success: true }
  })
