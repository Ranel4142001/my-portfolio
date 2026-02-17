import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailerService } from 'src/common/mailer/mailer.service';

@Injectable()
export class ContactService {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailerService,
  ) {}

  async create(dto: CreateContactDto) {
    try {
      // Save to database
      const submission = await this.prisma.contactSubmission.create({
        data: dto,
      });

      // Send email in background
      this.mailerService.sendContactNotification(
        dto.name,
        dto.email,
        dto.message,
      ).catch(err => console.error('Background Email Error:', err));

      return submission;
    } catch (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
  }

  async findAll() {
    return this.prisma.contactSubmission.findMany({
      orderBy: { created_at: 'desc' },
    });
  }

  async remove(id: number) {
    return this.prisma.contactSubmission.delete({ where: { id } });
  }
}
