import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // 👈 Best Practice #1
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter;

  constructor(private configService: ConfigService) { // 👈 Inject ConfigService
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        // 👈 Best Practice #2: Use configService.get() for reliability on Render
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
      logger: true,
      debug: true,
      tls: {
        rejectUnauthorized: false 
      }
    });

    // Helpful check for your Render logs
    if (!this.configService.get('EMAIL_USER')) {
      console.error('❌ MAILER ERROR: EMAIL_USER is missing from environment!');
    }
  }

  async sendContactNotification(name: string, email: string, message: string) {
    const mailOptions = {
      from: '"Portfolio Bot" <becauselenar@gmail.com>', 
      to: 'becauselenar@gmail.com', 
      subject: `🚀 New Contact from ${name}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully:', info.messageId);
      return info;
    } catch (error) {
      console.error('❌ Nodemailer Error details:', error);
      throw error;
    }
  }
}