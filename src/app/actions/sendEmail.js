'use server'

import nodemailer from 'nodemailer';

export async function sendEmail(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Portfolio message from ${name}`,
            replyTo: email,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `,
        });

        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false };
    }
}