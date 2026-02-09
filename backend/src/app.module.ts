import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ContactModule } from './contact/contact.module';
import { PageViewModule } from './page-view/page-view.module';


@Module({
  imports: [PrismaModule, ContactModule, PageViewModule],
  controllers: [],
  providers: [],
})
export class AppModule {}