import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const dbUrl = process.env.DATABASE_URL;

    if (!dbUrl) {
      throw new Error('DATABASE_URL is not defined in environment variables');
    }

    const url = new URL(dbUrl);

   const adapter = new PrismaMariaDb({
      host: url.hostname,
      user: url.username,
      password: decodeURIComponent(url.password), // Handles special characters in password
      database: url.pathname.slice(1),
      port: parseInt(url.port) || 3306,
      connectionLimit: 2,
      // Aiven FREE tier requires these specific SSL settings to connect from Render
      ssl: {
        rejectUnauthorized: false,
      },
      // Increase connectTimeout to prevent the 'failed to create socket' error
      connectTimeout: 10000, 
    });

    super({
      adapter,
      log: ['query', 'error', 'warn'],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}