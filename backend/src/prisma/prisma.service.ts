import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const dbUrl = process.env.DATABASE_URL;
    const url = new URL(dbUrl);

   // 3. Pass the Config Object directly to the Adapter
    // This solves the 'Argument of type Pool is not assignable' error
    const adapter = new PrismaMariaDb({
      host: url.hostname,
      user: url.username,
      password: url.password,
      database: url.pathname.slice(1), // Removes the "/" from "/defaultdb"
      port: parseInt(url.port),
      connectionLimit: 2, // Best practice for Aiven Free Tier
      ssl: {
        rejectUnauthorized: false // Required for Aiven
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