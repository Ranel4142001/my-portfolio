import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // Best practice for environment variables
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter;

  constructor(private configService: ConfigService) { // Injecting the service
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        // Accessing variables safely from Render/local environment
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
      logger: true, // Keep true to see detailed SMTP logs in Render
      debug: true,  // Keep true to see detailed SMTP logs in Render
      tls: {
        rejectUnauthorized: false 
      }
    });

    // Safety check using ConfigService
    if (!this.configService.get('EMAIL_USER') || !this.configService.get('EMAIL_PASS')) {
      console.warn('⚠️ Mailer Warning: Missing Email Credentials in ConfigService');
    }
  }

  async sendContactNotification(name: string, email: string, message: string) {
    const mailOptions = {
      // Using configService to fetch the sender email
      from: `"Portfolio Bot" <${this.configService.get('EMAIL_USER')}>`,
      to: 'becauselenar@gmail.com', 
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