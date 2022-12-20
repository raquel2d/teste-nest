import { IsString } from 'class-validator';

export class CreateProductionDto {
  @IsString()
  date_prod: string;

  @IsString()
  time_prod: string;

  @IsString()
  id_machine: string;

  qty: number;

  @IsString()
  status: string;

  created_at: Date;
}
