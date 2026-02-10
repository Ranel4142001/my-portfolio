import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    const host = this.configService.get<string>('EMAIL_HOST');
    const port = this.configService.get<number>('EMAIL_PORT');
    const user = this.configService.get<string>('EMAIL_USER');
    const pass = this.configService.get<string>('EMAIL_PASS');
    const secure = this.configService.get<string>('EMAIL_SECURE') === 'true';
    const from = this.configService.get<string>('EMAIL_FROM');

    if (!host || !port || !user || !pass || !from) {
      throw new Error(
        '❌ Missing required email environment variables. Please check EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_FROM'
      );
    }

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    // Verify SMTP connection
    this.transporter.verify((error) => {
      if (error) {
        console.error('❌ SMTP VERIFY FAILED:', error.message);
      } else {
        console.log('✅ SMTP server is ready to send emails');
      }
    });
  }

  async sendContactNotification(
  name: string,
  email: string,
  message: string,
): Promise<void> {
  try {
    const info = await this.transporter.sendMail({
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
    console.log('✅ Contact email sent:', info.messageId);
  } catch (error) {
    console.error('❌ Failed to send contact email:', error);
  }
}
}
