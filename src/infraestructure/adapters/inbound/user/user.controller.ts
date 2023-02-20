import { CreateUserDto } from '../../../../app/users/dtos/CreateUser.dto';
import { CreateUserService } from '../../../../app/users/services/createUser.service';

export class UserController {
  async createUser(req: any, email: any) {
    console.log('controller', req)
    const createUserRequest: CreateUserDto = req;
    const newUserService = new CreateUserService();
    const user = await newUserService.execute(createUserRequest, email);
    if(user == 401)return 401
    return user.dataValues
  }
}
