import { Module } from '@nestjs/common';
import { PageViewService } from './page-view.service';
import { PageViewController } from './page-view.controller';

@Module({
  controllers: [PageViewController],
  providers: [PageViewService],
})
export class PageViewModule {}
