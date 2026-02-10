import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailerService {
  constructor(private config: ConfigService) {
    sgMail.setApiKey(this.config.get('SENDGRID_API_KEY'));
  }

  async sendContactNotification(name: string, email: string, message: string) {
    const msg = {
      to: this.config.get('ADMIN_EMAIL'),      // Admin receives contact notifications
      from: this.config.get('EMAIL_FROM'),     // Verified sender email in SendGrid
      subject: `🚀 New Contact from ${name}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      await sgMail.send(msg);
      console.log('✅ Email sent via SendGrid');
    } catch (error) {
      console.error('❌ Failed to send contact email:', error);
      throw error;
    }
  }
}
