import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './usuario.controller';
import { userProviders } from './usuario.provider';
import { UserService } from './usuario.service';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService],
  controllers: [UserController],
})
export class UserModule {}
