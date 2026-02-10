import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailerService } from 'src/common/mailer/mailer.service';

@Injectable()
export class ContactService {
  constructor (
    private readonly prisma: PrismaService,
    private readonly mailerService: MailerService,
  ) {}

 async create(dto: CreateContactDto) {

  try {
      // 1. Save to database first and STORE it in 'submission'
      const submission = await this.prisma.contactSubmission.create({
        data: dto,
      });
  

    this.mailerService.sendContactNotification(
      dto.name,
      dto.email,
      dto.message,
    ).catch(err => console.error('Background Email Error:', err));

    // 3. Return the result immediately so the user sees "Success" right away
    return submission;

  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
}

async findAll() {
    return await this.prisma.contactSubmission.findMany({
      orderBy: { created_at: 'desc' },
    });
  }

  async remove(id: number) {
  // Best Practice: Check if it exists before trying to delete
  return this.prisma.contactSubmission.delete({
    where: { id },
  });
}

}
