import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });
  }

  async sendContactNotification(name: string, email: string, message: string) {
    const mailOptions = {
      from: `"Portfolio Bot" <${process.env.EMAIL_USER}>`,
      to: 'your-personal-email@gmail.com', // Where you want the alert
      subject: `🚀 New Contact from ${name}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}