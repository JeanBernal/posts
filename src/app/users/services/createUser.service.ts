import { User } from '../../../domain/users/model/User';
import { createUser, getUser } from '../../../domain/users/repository/user.repository';
import { CreateUserDto } from '../dtos/CreateUser.dto';

export interface CreateUserService {
  execute(request: CreateUserDto, email: string): Promise<CreateUserResponse>;
}

export interface CreateUserResponse {
  user: User;
}

export class CreateUserService implements CreateUserService {

  public async execute(request: CreateUserDto, email: string): Promise<any> {
    const userExists: any = await getUser(email);
    console.log('service', userExists)
    if(userExists.role !== 'admin'){
        return 401
    }
    
    const payload = {
      name: request.name,
      email: request.email,
      password: request.password,
      role: 'user',
      permissions: request.permissions
    }
    const user = await createUser(payload);
    return user;
  }
}
