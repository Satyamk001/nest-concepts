import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDestinationDto {
  @IsNotEmpty()
  name: string;


  @IsOptional()
  @IsString()
  notes?: string;
}