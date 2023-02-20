import { User } from '../model/User';
import { CreateUserDto } from '../../../app/users/dtos/CreateUser.dto';

export interface UserRepository {
  createUser(request: CreateUserDto): Promise<User>;
  getUserById(id: number): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  getUsers(): Promise<User[]>;
}
