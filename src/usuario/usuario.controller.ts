import { Controller, Get } from '@nestjs/common';
import { User } from './usuario.entity';
import { UserService } from './usuario.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async listar(): Promise<User[]> {
    return this.userService.findAll();
  }
}
