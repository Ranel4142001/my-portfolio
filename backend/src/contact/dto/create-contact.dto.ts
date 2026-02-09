import { IsString, IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
  
  @IsOptional()
  @IsString()
  preferredDate?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: 'Message must be at least 10 characters long' })
  message: string;
}