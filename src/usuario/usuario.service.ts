import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioCadastrarDto } from './dto/usuario.dto';
import { User } from './usuario.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private UserRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.UserRepository.find();
  }
  async cadastrar(data: UsuarioCadastrarDto) {
    return this.UserRepository.save(this.UserRepository.create(data));
  }
}
