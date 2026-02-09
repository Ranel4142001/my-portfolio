import { PartialType } from '@nestjs/mapped-types';
import { CreatePageViewDto } from './create-page-view.dto';

export class UpdatePageViewDto extends PartialType(CreatePageViewDto) {}
