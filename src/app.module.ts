import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './usuario/usuario.module';
import { ProductionsModule } from './productions/productions.module';

@Module({
  imports: [UserModule, ProductionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
