import { Request, Response, Router } from 'express';
import { SignInController } from './auth.controller';

export class AuthRouter {
  public router: Router;
  private signInController: SignInController;

  constructor() {
    this.router = Router();
    this.signInController = new SignInController();

    this.router.post('/', async(req: Request, res: Response) => {
      const user = await this.signInController.execute(req.body, res);
      return res.status(201).json({ user, token: res.locals.token });
    });
  }
}
export const authRouter = new AuthRouter().router;