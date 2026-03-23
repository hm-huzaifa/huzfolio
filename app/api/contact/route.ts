import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import {PERSONAL_INFO} from "@/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.TO_EMAIL || `${PERSONAL_INFO.email}`;

    const currentDate = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #0a0a0a;">
            <tr>
              <td align="center" style="padding: 48px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #171717; border-radius: 8px; overflow: hidden;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #171717; padding: 32px 40px 24px; border-bottom: 1px solid #262626;">
                      <h1 style="margin: 0; color: #f5f5f5; font-size: 24px; font-weight: 600; letter-spacing: -0.3px;">
                        Contact Form Submission
                      </h1>
                      <p style="margin: 8px 0 0; color: #737373; font-size: 13px; font-weight: 400;">
                        ${currentDate}
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 32px 40px;">
                      
                      <!-- Contact Info -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="padding-bottom: 24px; border-bottom: 1px solid #262626;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td width="48" style="vertical-align: middle;">
                                  <div style="width: 40px; height: 40px; background-color: #2a2a2a; border-radius: 50%; display: inline-block; text-align: center; line-height: 40px; color: #d4d4d4; font-weight: 500; font-size: 16px; border: 1px solid #3a3a3a;">
                                    ${safeName.charAt(0).toUpperCase()}
                                  </div>
                                </td>
                                <td style="vertical-align: middle; padding-left: 16px;">
                                  <p style="margin: 0; color: #f5f5f5; font-size: 18px; font-weight: 500; letter-spacing: -0.2px;">
                                    ${safeName}
                                  </p>
                                  <p style="margin: 4px 0 0; color: #a3a3a3; font-size: 14px;">
                                    <a href="mailto:${email}" style="color: #a3a3a3; text-decoration: none; border-bottom: 1px solid #404040;">${safeEmail}</a>
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Message Section -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 24px;">
                        <tr>
                          <td>
                            <p style="margin: 0 0 12px; color: #737373; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.8px;">
                              Message
                            </p>
                            <div style="background-color: #1f1f1f; border: 1px solid #262626; border-radius: 6px; padding: 20px;">
                              <div style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.7; white-space: pre-wrap; word-wrap: break-word;">${safeMessage}</div>
                            </div>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Action Button -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 32px;">
                        <tr>
                          <td>
                            <a href="mailto:${email}?subject=Re: Portfolio Contact" style="display: inline-block; background-color: #262626; color: #f5f5f5; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; font-size: 14px; border: 1px solid #404040;">
                              Reply to ${safeName}
                            </a>
                          </td>
                        </tr>
                      </table>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #171717; padding: 24px 40px; border-top: 1px solid #262626;">
                      <p style="margin: 0; color: #525252; font-size: 12px; line-height: 1.5;">
                        Sent from portfolio contact form
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `New Contact Form Submission\n\nDate: ${currentDate}\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nReply to: ${email}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully!', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}

