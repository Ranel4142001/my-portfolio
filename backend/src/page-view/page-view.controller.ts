import { Controller, Get, Post, Body } from '@nestjs/common';
import { PageViewService } from './page-view.service';
import { CreatePageViewDto } from './dto/create-page-view.dto';

@Controller('tracker')
export class PageViewController {
  constructor(private readonly pageViewService: PageViewService) {}

  @Post('visit')
  create(@Body() createPageViewDto: CreatePageViewDto) {
    return this.pageViewService.create(createPageViewDto);
  }

  @Get('stats')
  findAll() {
    return this.pageViewService.findAll();
  }
}
