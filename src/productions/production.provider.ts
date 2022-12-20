import { DataSource } from 'typeorm';
import { Production } from './entities/production.entity';

export const productionProviders = [
  {
    provide: 'PRODUCTION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Production),
    inject: ['DATA_SOURCE'],
  },
];
