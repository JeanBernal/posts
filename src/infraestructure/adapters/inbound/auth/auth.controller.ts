import { SignInService } from '../../../../app/auth/services/auth.service';
import { CreateUserDto } from '../../../../app/users/dtos/CreateUser.dto';

export class SignInController {
  async execute(req: any, res: any) {
    const createUserRequest: CreateUserDto = req;
    const newAuthService = new SignInService()
    const user = await newAuthService.execute(createUserRequest);
    
    if(user==403) return user;
    
    return {user: user.user.dataValues, token: user.token};
  }
}
