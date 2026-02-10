import { Controller, Get, Post, Body, UseGuards} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { AdminGuard } from 'src/auth/admin.guard';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() dto: CreateContactDto) {
    return this.contactService.create(dto);
  }

  @Get('all')
  @UseGuards(AdminGuard)
  findAll() {
    return this.contactService.findAll();
  }

}
