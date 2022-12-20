import { Inject, Injectable } from '@nestjs/common';
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
    return this.ProductionRepository.findOneBy({
      id: id,
    });
  }

  async update(id: number, updateProductionDto: UpdateProductionDto) {
    const production = await this.ProductionRepository.findOneBy({
      id: id,
    });

    const newProduction = {
      ...production,
      ...updateProductionDto,
    };

    await this.ProductionRepository.save(newProduction);

    return newProduction;
  }

  remove(id: number) {
    return `This action removes a #${id} production`;
  }
}
