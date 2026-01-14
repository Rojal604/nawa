import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, message } = body

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            )
        }

        // Create transporter with SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        })

        // Email content
        const mailOptions = {
            from: `"NavaGanga Website" <${process.env.SMTP_FROM}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `New Contact Form Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #0B1120 0%, #1a2e44 100%); padding: 30px; border-radius: 10px 10px 0 0;">
                        <h1 style="color: #F59E0B; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                    </div>
                    <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 10px 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 100px;"><strong>Name:</strong></td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;"><strong>Email:</strong></td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:${email}" style="color: #0B1120;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;"><strong>Phone:</strong></td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${phone || 'Not provided'}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 20px;">
                            <p style="color: #64748b; margin: 0 0 10px 0;"><strong>Message:</strong></p>
                            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                                <p style="color: #1e293b; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            </div>
                        </div>
                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                                This message was sent from the NavaGanga Financial Consultancy website contact form.
                            </p>
                        </div>
                    </div>
                </div>
            `,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
This message was sent from the NavaGanga Financial Consultancy website contact form.
            `,
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        )
    }
}
