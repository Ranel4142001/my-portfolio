import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePageViewDto } from './dto/create-page-view.dto';

@Injectable()
export class PageViewService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePageViewDto) {

    return await this.prisma.pageView.create({
      data: {
       page_path: dto.page_path, 
      user_agent: dto.user_agent,
      referrer: dto.referrer,
      },
    });
  }

  async findAll() {
    return await this.prisma.pageView.findMany({
      orderBy: { created_at: 'desc' }, 
    });
  }
}