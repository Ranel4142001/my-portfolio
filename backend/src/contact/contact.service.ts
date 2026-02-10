import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailerService } from 'src/common/mailer/mailer.service';

@Injectable()
export class ContactService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailerService: MailerService,
  ) {}

  async create(dto: CreateContactDto) {
    try {
      // 1️⃣ Save to database
      const submission = await this.prisma.contactSubmission.create({
        data: dto,
      });

      // 2️⃣ Send email — properly awaited
      try {
        const info = await this.mailerService.sendContactNotification(
          dto.name,
          dto.email,
          dto.message,
        );
        console.log('✅ Email successfully sent to admin');
      } catch (emailError) {
        console.error('❌ Failed to send contact email:', emailError);
      }

      // 3️⃣ Return database result immediately
      return submission;
    } catch (error) {
      console.error('❌ Error creating contact submission:', error);
      throw error;
    }
  }

  async findAll() {
    return this.prisma.contactSubmission.findMany({
      orderBy: { created_at: 'desc' },
    });
  }

  async remove(id: number) {
    return this.prisma.contactSubmission.delete({
      where: { id },
    });
  }
}
