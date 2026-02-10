import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use SSL/TLS for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
     tls: {
        // Essential for cloud environments like Render to avoid handshake blocks
        rejectUnauthorized: false 
      }
    });
  }

  async sendContactNotification(name: string, email: string, message: string) {
    const mailOptions = {
      from: `"Portfolio Bot" <${process.env.EMAIL_USER}>`,
      to: 'becauselenar@gmail.com', // 👈 MAKE SURE THIS IS YOUR ACTUAL EMAIL
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