import { Request, Response, Router } from 'express';
import { AuthMiddleware } from '../../../security/auth.middleware';
import { UserController } from '../user/user.controller';

export class UserRouter {
  public router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();

    const authMiddleware = new AuthMiddleware()

    this.router.post('/', authMiddleware.verifyToken, async(req: any, res: Response) => {
      const user = await this.userController.createUser(req.body, req);
      if(user == 401)return res.status(401).json({ message: 'Does not have permission'});
      return res.status(201).json({ user, token: res.locals.token });
    });
  }
}
export const userRouter = new UserRouter().router;