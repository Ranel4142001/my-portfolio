import { Controller, Get, Post, Body, UseGuards, Param, Delete } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { AdminGuard } from 'src/auth/admin.guard';
import { MailerService } from 'src/common/mailer/mailer.service';

@Controller('contact')
export class ContactController {
  constructor(
    private readonly contactService: ContactService,
    private readonly mailerService: MailerService,
  ) {}

  /** 
   * Create a new contact submission 
   */
  @Post()
  async create(@Body() dto: CreateContactDto) {
    return this.contactService.create(dto);
  }

  /** 
   * Get all contact submissions (admin only)
   */
  @Get('all')
  @UseGuards(AdminGuard)
  async findAll() {
    return this.contactService.findAll();
  }

  /**
   * Delete a contact submission by ID (admin only)
   */
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.contactService.remove(+id);
  }

  /**
   * Test SendGrid email functionality
   */
  @Get('test-email')
  async testEmail() {
    try {
      await this.mailerService.sendContactNotification(
        'Test User',
        'yourbackupemail@gmail.com', // You can change this to any email for testing
        'This is a test email sent from your NestJS backend via SendGrid.'
      );
      return { status: '✅ Test email sent' };
    } catch (error) {
      console.error('❌ Test email failed:', error);
      return { status: '❌ Test email failed', error: error.message };
    }
  }
}
