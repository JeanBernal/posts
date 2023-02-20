import { Request, Response, Router } from 'express';
import { AuthMiddleware } from '../../../security/auth.middleware';
import { PostController } from './post.controller';

export class PostRouter {
  public router: Router;
  private postController: PostController;

  constructor() {
    this.router = Router();
    this.postController = new PostController();

    const authMiddleware = new AuthMiddleware()

    this.router.post('/', authMiddleware.verifyToken, async(req: Request, res: Response) => {
      const post = await this.postController.createPost(req.body, req);
      if(post == 401)return res.status(401).json({ message: 'Does not have permission'});
      return res.status(201).json({ post });
    });
    this.router.get('/', authMiddleware.verifyToken, async(req: Request, res: Response) => {
      const post = await this.postController.getPost(req);
      if(post == 401)return res.status(401).json({ message: 'Does not have permission'});
      return res.status(201).json({ post });
    });
  }
}
export const postRouter = new PostRouter().router;