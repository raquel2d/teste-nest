import { DataSource } from 'typeorm';

const PORT: number = +process.env.DB_PORT;

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mssql',
        host: process.env.DB_HOST,
        port: PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        extra: {
          trustServerCertificate: true,
        },
      });

      return dataSource.initialize();
    },
  },
];
