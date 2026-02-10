import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { MailerService } from 'src/common/mailer/mailer.service';

@Module({
  controllers: [ContactController],
  providers: [ContactService, MailerService],
})
export class ContactModule {}
