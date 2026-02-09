import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // Best Practice: Extract database parts from the URL so we don't rely on 5 separate variables
    const dbUrl = process.env.DATABASE_URL;
    
    // Simple regex to pull host, user, password, port, and db name from a mysql:// URL
    const dbParams = dbUrl?.match(/mysql:\/\/([^:]+):([^@]+)@([^:/]+):(\d+)\/(.+)/);

    const adapter = new PrismaMariaDb({
      // Use the parsed value or the individual env var as backup
      host: dbParams?.[3] || process.env.DB_HOST || 'localhost',
      user: dbParams?.[1] || process.env.DB_USER || 'root',
      password: dbParams?.[2] || process.env.DB_PASSWORD || '',
      database: dbParams?.[5]?.split('?')[0] || process.env.DB_NAME || 'my_portfolio',
      port: parseInt(dbParams?.[4] || process.env.DB_PORT || '3307'),
      connectionLimit: 2, // Low limit for Aiven Free Tier
      // Required for Aiven SSL
      ssl: {
        rejectUnauthorized: false
      }
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