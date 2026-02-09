import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePageViewDto } from './dto/create-page-view.dto';

@Injectable()
export class PageViewService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePageViewDto) {
    return await this.prisma.pageView.create({
      data: dto, // Because the DTO names match the Schema names!
    });
  }

  async findAll() {
    return await this.prisma.pageView.findMany({
      orderBy: { created_at: 'desc' },
    });
  }
}