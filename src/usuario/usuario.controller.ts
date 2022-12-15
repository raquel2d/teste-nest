import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioCadastrarDto } from './dto/usuario.dto';
import { User } from './usuario.entity';
import { UserService } from './usuario.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async listar(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async cadastrar(@Body() data: UsuarioCadastrarDto) {
    return this.userService.cadastrar(data);
  }
}
