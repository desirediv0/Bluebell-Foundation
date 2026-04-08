import { NextResponse } from 'next/server';
import transporter from '@/lib/nodemailer';
import { getAdminEmailHTML, getUserEmailHTML } from '@/lib/email-templates';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phoneNumber, subject, message } = body;

        // Validation
        if (!name || !email || !phoneNumber || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const adminEmail = process.env.NEXT_PUBLIC_TO_EMAIL;
        const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL;

        // Send Email to Admin
        await transporter.sendMail({
            from: `"Bluebell Website" <${fromEmail}>`,
            to: adminEmail,
            subject: `New Contact Inquiry: ${subject || 'General'}`,
            html: getAdminEmailHTML('contact', body),
        });

        // Send Thank You Email to User
        await transporter.sendMail({
            from: `"Bluebell Foundation" <${fromEmail}>`,
            to: email,
            subject: `Thank you for contacting Bluebell Foundation`,
            html: getUserEmailHTML(name, 'contact'),
        });

        return NextResponse.json({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Email API Error:', error);
        return NextResponse.json({ error: 'Failed to send emails', details: error.message }, { status: 500 });
    }
}
