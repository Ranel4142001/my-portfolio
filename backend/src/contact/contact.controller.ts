import { Controller, Get, Post, Body, UseGuards, Param, Delete} from '@nestjs/common';
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

  @Delete(':id')
async remove(@Param('id') id: string) {
  // Convert string ID from URL to number for Prisma
  return this.contactService.remove(+id);
}

}
