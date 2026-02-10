import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePageViewDto } from './dto/create-page-view.dto';

// backend/src/page-view/page-view.service.ts

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
    // Best Practice: Group by page_path to aggregate redundant data
    return await this.prisma.pageView.groupBy({
      by: ['page_path'],
      _count: {
        page_path: true, // This creates the 'page_path' count for the frontend
      },
      _max: {
        created_at: true, // Get the latest visit time for each path
      },
      orderBy: {
        _count: {
          page_path: 'desc', // Show the most popular pages first
        },
      },
    });
  }
}