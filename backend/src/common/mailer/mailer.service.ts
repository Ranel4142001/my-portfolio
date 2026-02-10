import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use SSL/TLS for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // BEST PRACTICE: Shorten timeouts so it doesn't hang your app
      connectionTimeout: 5000, 
      greetingTimeout: 5000,
    });
  }

  async sendContactNotification(name: string, email: string, message: string) {
    const mailOptions = {
      from: `"Portfolio Bot" <${process.env.EMAIL_USER}>`,
      to: 'your-personal-email@gmail.com', // 👈 MAKE SURE THIS IS YOUR ACTUAL EMAIL
      subject: `🚀 New Contact from ${name}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    return this.transporter.sendMail(mailOptions);
  }
}