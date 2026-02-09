import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor (private readonly prisma: PrismaService) {}

 async create(dto: CreateContactDto) {

  try { 
    return await this.prisma.contactSubmission.create({
      data:dto,
    });
  } catch (error) {    console.error('Error creating contact:', error);
    throw error;
  }
}

 async findAll() {
    return await this.prisma.contactSubmission.findMany({
      orderBy: { created_at: 'desc' },
    });
  }

}
