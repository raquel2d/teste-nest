import { PartialType } from '@nestjs/mapped-types';
import { CreateProductionDto } from './create-production.dto';
import { IsString } from 'class-validator';

export class UpdateProductionDto extends PartialType(CreateProductionDto) {
  @IsString()
  date_prod?: string;

  @IsString()
  time_prod?: string;

  @IsString()
  id_machine?: string;

  qty?: number;

  @IsString()
  status?: string;
}
