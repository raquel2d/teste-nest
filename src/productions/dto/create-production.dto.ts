import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductionDto {
  @IsNotEmpty()
  @IsString()
  date_prod: string;

  @IsNotEmpty()
  @IsString()
  time_prod: string;

  @IsNotEmpty()
  @IsString()
  id_machine: string;

  @IsNotEmpty()
  @IsNumber()
  qty: number;

  @IsNotEmpty()
  @IsString()
  status: string;

  created_at: Date;
}
