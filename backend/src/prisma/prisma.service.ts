import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
//import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
  //  const adapter = new PrismaMariaDb({
  //    host: process.env.DB_HOST || 'localhost',
  //    user: process.env.DB_USER || 'root',
  //    password: process.env.DB_PASSWORD || '',
  //    database: process.env.DB_NAME || 'my_portfolio',
  //   port: parseInt(process.env.DB_PORT || '3307'),
  //    connectionLimit: 5,
  //  });

    super({
    // adapter,
    datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
      log: ['error', 'warn'],
    } as any);
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}