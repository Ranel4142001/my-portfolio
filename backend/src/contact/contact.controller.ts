import { Controller, Get, Post, Body, UseGuards, Param, Delete} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { AdminGuard } from 'src/auth/admin.guard';
import { MailerService } from 'src/common/mailer/mailer.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService, private readonly mailerService: MailerService, ) {}

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

@Get('test-email')
async testEmail() {
  try {
    await this.mailerService.sendContactNotification(
      'Test User',
      'yourbackupemail@gmail.com',
      'This is a test email from Render.'
    );
    return { status: '✅ Test email sent' };
  } catch (error) {
    console.error('❌ Test email failed:', error);
    return { status: '❌ Test email failed', error: error.message };
  }
}

}
