import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 👈 Import this
import { PrismaModule } from './prisma/prisma.module';
import { ContactModule } from './contact/contact.module';
import { PageViewModule } from './page-view/page-view.module';

@Module({
  imports: [
    // 👈 Add this FIRST so other modules can use your .env variables
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    PrismaModule, 
    ContactModule, 
    PageViewModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}