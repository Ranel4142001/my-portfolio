import { IsString, IsOptional, IsNotEmpty, IsUrl } from 'class-validator';

export class CreatePageViewDto {
  @IsString()
  @IsNotEmpty()
  // Matches 'page_path' in your Prisma schema
  page_path: string;

  @IsString()
  @IsOptional()
  // Matches 'user_agent' in your Prisma schema
  user_agent?: string;

  @IsString()
  @IsOptional()
  // Matches 'referrer' in your Prisma schema
  referrer?: string;

  @IsString()
  @IsOptional()
  // Optional: if you want to track session grouping
  session_id?: string;
}