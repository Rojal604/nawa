import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface FHCFormData {
    name: string
    city: string
    age: string
    familySize: string
    incomeRange: string
    existingCovers: string[]
    financialGoals: string[]
    monthlySurplus: string
    whatsappConsent: boolean
}

export async function POST(request: NextRequest) {
    try {
        const body: FHCFormData = await request.json()
        const {
            name,
            city,
            age,
            familySize,
            incomeRange,
            existingCovers,
            financialGoals,
            monthlySurplus,
            whatsappConsent
        } = body

        // Validate required fields
        if (!name || !city || !age) {
            return NextResponse.json(
                { error: 'Name, city, and age are required' },
                { status: 400 }
            )
        }

        // Create transporter with SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        })

        // Format arrays for display
        const existingCoversText = existingCovers.length > 0 ? existingCovers.join(', ') : 'None selected'
        const financialGoalsText = financialGoals.length > 0 ? financialGoals.join(', ') : 'None selected'

        // Email content
        const mailOptions = {
            from: `"NavaGanga FHC" <${process.env.SMTP_FROM}>`,
            to: process.env.CONTACT_EMAIL,
            subject: `🏥 New Financial Health Check-up Request from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #0B1120 0%, #1a2e44 100%); padding: 30px; border-radius: 10px 10px 0 0;">
                        <h1 style="color: #F59E0B; margin: 0; font-size: 24px;">🏥 Financial Health Check-up Request</h1>
                        <p style="color: #94a3b8; margin: 10px 0 0 0;">New patient registration received</p>
                    </div>
                    <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 10px 10px;">
                        
                        <!-- Patient Profile Section -->
                        <div style="margin-bottom: 25px;">
                            <h2 style="color: #0B1120; font-size: 16px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #F59E0B;">👤 Patient Profile</h2>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; width: 140px;"><strong>Name:</strong></td>
                                    <td style="padding: 10px 0; color: #1e293b;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b;"><strong>City/Location:</strong></td>
                                    <td style="padding: 10px 0; color: #1e293b;">${city}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b;"><strong>Age Group:</strong></td>
                                    <td style="padding: 10px 0; color: #1e293b;">${age}</td>
                                </tr>
                            </table>
                        </div>

                        <!-- Family Vitals Section -->
                        <div style="margin-bottom: 25px;">
                            <h2 style="color: #0B1120; font-size: 16px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #F59E0B;">👨‍👩‍👧‍👦 Family Vitals</h2>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; width: 140px;"><strong>Family Size:</strong></td>
                                    <td style="padding: 10px 0; color: #1e293b;">${familySize || 'Not specified'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b;"><strong>Existing Covers:</strong></td>
                                    <td style="padding: 10px 0; color: #1e293b;">${existingCoversText}</td>
                                </tr>
                            </table>
                        </div>

                        <!-- Financial Vitals Section -->
                        <div style="margin-bottom: 25px;">
                            <h2 style="color: #0B1120; font-size: 16px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #F59E0B;">💰 Financial Vitals</h2>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; width: 140px;"><strong>Monthly Income:</strong></td>
                                    <td style="padding: 10px 0; color: #1e293b;">${incomeRange || 'Not specified'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b;"><strong>Monthly Surplus:</strong></td>
                                    <td style="padding: 10px 0; color: #1e293b;">${monthlySurplus || 'Not specified'}</td>
                                </tr>
                            </table>
                        </div>

                        <!-- Treatment Goals Section -->
                        <div style="margin-bottom: 25px;">
                            <h2 style="color: #0B1120; font-size: 16px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #F59E0B;">🎯 Treatment Goals</h2>
                            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                                <p style="color: #1e293b; margin: 0;">${financialGoalsText}</p>
                            </div>
                        </div>

                        <!-- Consent Section -->
                        <div style="background: ${whatsappConsent ? '#dcfce7' : '#fef2f2'}; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                            <p style="margin: 0; color: ${whatsappConsent ? '#166534' : '#991b1b'}; font-size: 14px;">
                                <strong>WhatsApp Consent:</strong> ${whatsappConsent ? '✅ Approved' : '❌ Not Approved'}
                            </p>
                        </div>

                        <!-- Footer -->
                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                                This Financial Health Check-up request was submitted from the NavaGanga website.
                                <br>Please reach out to the patient via WhatsApp to schedule their consultation.
                            </p>
                        </div>
                    </div>
                </div>
            `,
            text: `
FINANCIAL HEALTH CHECK-UP REQUEST
==================================

PATIENT PROFILE
---------------
Name: ${name}
City/Location: ${city}
Age Group: ${age}

FAMILY VITALS
-------------
Family Size: ${familySize || 'Not specified'}
Existing Covers: ${existingCoversText}

FINANCIAL VITALS
----------------
Monthly Income: ${incomeRange || 'Not specified'}
Monthly Surplus: ${monthlySurplus || 'Not specified'}

TREATMENT GOALS
---------------
${financialGoalsText}

CONSENT
-------
WhatsApp Consent: ${whatsappConsent ? 'Approved' : 'Not Approved'}

---
This request was submitted from the NavaGanga Financial Consultancy website.
            `,
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'FHC request sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error sending FHC email:', error)
        return NextResponse.json(
            { error: 'Failed to send request' },
            { status: 500 }
        )
    }
}
