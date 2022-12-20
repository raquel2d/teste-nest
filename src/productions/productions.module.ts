import { Module } from '@nestjs/common';
import { ProductionsService } from './productions.service';
import { ProductionsController } from './productions.controller';
import { productionProviders } from './production.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...productionProviders, ProductionsService],
  controllers: [ProductionsController],
})
export class ProductionsModule {}
