import { Controller, Get, Post, Body } from '@nestjs/common';
import { PageViewService } from './page-view.service';
import { CreatePageViewDto } from './dto/create-page-view.dto';

@Controller('page-view')
export class PageViewController {
  constructor(private readonly pageViewService: PageViewService) {}

  @Post()
  create(@Body() createPageViewDto: CreatePageViewDto) {
    return this.pageViewService.create(createPageViewDto);
  }

  @Get()
  findAll() {
    return this.pageViewService.findAll();
  }
}
