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
  
 try {
        await this.mailerService.sendContactNotification( // Use mailerService here
          dto.name,
          dto.email,
          dto.message,
        );
      } catch (mailError) {
        // Log mail error but don't crash the whole request
        console.error('Email notification failed to send:', mailError);
      }

      // 3. Return the saved submission back to the controller
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

}
