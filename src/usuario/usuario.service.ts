import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  RespostaUsuarioCadastrarDto,
  UsuarioCadastrarDto,
} from './dto/usuario.dto';
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
    const user = new User();
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;

    await this.UserRepository.save(user)
      .then(() => {
        return <RespostaUsuarioCadastrarDto>{
          name: user.name,
          email: user.email,
        };
      })
      .catch((err) => {
        return { message: err };
      });
  }
}
