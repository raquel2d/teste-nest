import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { CreateProductionDto } from './dto/create-production.dto';
import { UpdateProductionDto } from './dto/update-production.dto';
import { Production } from './entities/production.entity';

@Injectable()
export class ProductionsService {
  constructor(
    @Inject('PRODUCTION_REPOSITORY')
    private ProductionRepository: Repository<Production>,
  ) {}

  async create(createProductionDto: CreateProductionDto) {
    return this.ProductionRepository.save(
      this.ProductionRepository.create(createProductionDto),
    );
  }

  async findAll() {
    return this.ProductionRepository.find();
  }

  async findOne(id: number) {
    const production = await this.ProductionRepository.findOneBy({
      id: id,
    });

    if (!production) {
      throw new BadRequestException(`Production with id: ${id} does not exist`);
    }

    return production;
  }

  async update(id: number, updateProductionDto: UpdateProductionDto) {
    const production = await this.ProductionRepository.findOneBy({
      id: id,
    });

    Object.entries(updateProductionDto).forEach(([key, value]) => {
      production[key] = value;
    });

    await this.ProductionRepository.save(production);

    return production;
  }

  async remove(id: number) {
    const production = await this.ProductionRepository.findOneBy({
      id: id,
    });

    if (!production) {
      throw new BadRequestException(`Production with id: ${id} does not exist`);
    }

    await this.ProductionRepository.delete({ id });
  }
}
