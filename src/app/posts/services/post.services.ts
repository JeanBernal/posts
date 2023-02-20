import { createPost, getPosts } from '../../../domain/posts/repository/post.repository';
import { PostDto } from '../dto/Post.dto';
import { Post } from '../../../domain/posts/model/Post';
import { getUser } from '../../../domain/users/repository/user.repository';

export interface PostService {
  execute(request: PostDto): Promise<PostResponse>;
}

export interface PostResponse {
  post: Post;
}

export class PostService implements PostService {

  public async create(request: PostDto, email: string): Promise<any> {
    const user: any = await getUser(email);

    if(user.permissions == 1){
        const post = await createPost(request);
        return post;
    }
    return 401;
  }

  public async get(req: string): Promise<any> {
    const user: any = await getUser(req);

    if(user.permissions == 1){      
        const post = await getPosts();
        return post;
    }
    return 401;
  }
}