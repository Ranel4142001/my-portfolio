import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // 👈 Best Practice #1
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get('EMAIL_HOST'),
      port: this.configService.get<number>('EMAIL_PORT'),
      secure: this.configService.get('EMAIL_SECURE') === 'true',
      auth: {
        user: this.configService.get('EMAIL_USER'),
        pass: this.configService.get('EMAIL_PASS'),
      },
      
    });
    console.log('SMTP HOST:', this.configService.get('EMAIL_HOST'));
    console.log('SMTP PORT:', this.configService.get('EMAIL_PORT'));
    console.log('SMTP USER:', this.configService.get('EMAIL_USER'));

    this.transporter.verify((error) => {
      if (error) {
        console.error('❌ SMTP VERIFY FAILED:', error);
      } else {
        console.log('✅ SMTP server is ready to send emails');
      }
    });
  }

  async sendContactNotification(name: string, email: string, message: string) {
    return await this.transporter.sendMail({
      from: `"Portfolio Bot" <${this.configService.get('EMAIL_FROM')}>`,
      to: this.configService.get('EMAIL_USER'),
      subject: `🚀 New Contact from ${name}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
  }
}