import { User } from '../../../domain/users/model/User';
import { createUser, getUser } from '../../../domain/users/repository/user.repository';
import { AuthMiddleware } from '../../../infraestructure/security/auth.middleware';
import { SignInDto } from '../dto/Sigin.dto';

export interface SignInService {
  execute(request: SignInDto): Promise<SignInResponse>;
}

export interface SignInResponse {
  user: User;
}

export class SignInService implements SignInService {

  public async execute(request: SignInDto): Promise<any> {      
    const user = await getUser(request);
    
    if(!user) return "User does not exist. Check your email";
    
    const authMiddleware = new AuthMiddleware();
    const auth = await authMiddleware.authenticate(request.password, user);
    
    if(auth !== null){
        return {user: user,token: auth};
    }
    return 403
  }
}
