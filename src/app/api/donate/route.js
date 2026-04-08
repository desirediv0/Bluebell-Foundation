import { NextResponse } from 'next/server';
import transporter from '@/lib/nodemailer';
import { getAdminEmailHTML, getUserEmailHTML } from '@/lib/email-templates';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phoneNumber, amount } = body;

        // Validation
        if (!name || !email || !phoneNumber || !amount) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const adminEmail = process.env.NEXT_PUBLIC_TO_EMAIL;
        const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL;

        // Send Email to Admin
        await transporter.sendMail({
            from: `"Bluebell Donation" <${fromEmail}>`,
            to: adminEmail,
            subject: `New Donation Contribution: ₹${amount}`,
            html: getAdminEmailHTML('donation', body),
        });

        // Send Thank You Email to User
        await transporter.sendMail({
            from: `"Bluebell Foundation" <${fromEmail}>`,
            to: email,
            subject: `Thank you for your generous donation to Bluebell Foundation`,
            html: getUserEmailHTML(name, 'donation'),
        });

        return NextResponse.json({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Donation API Error:', error);
        return NextResponse.json({ error: 'Failed to send emails', details: error.message }, { status: 500 });
    }
}
