import { PostDto } from '../../../../app/posts/dto/Post.dto';
import { PostService } from '../../../../app/posts/services/post.services';

export class PostController {
  async createPost(req: any, email: any) {
    const createPostRequest: PostDto = req;
    const newPostService = new PostService();
    const post = await newPostService.create(createPostRequest, email);
    if(post === 401)return 401
    return post.dataValues;
  }
  async getPost(req: any) {
    const newPostService = new PostService();
    const post = await newPostService.get(req);
    console.log('controller', post)
    if(post === 401)return 401
    return post;
  }
}
