import { PostMapper } from "../../../infraestructure/database/models/Post"

export const createPost = async (req: any) => {
    const mapper = await PostMapper()
    const { description } = req;

    return await mapper.create({
      description
    });
}

export const getPosts = async () => {
  const mapper = await PostMapper()  
  return await mapper.findAll({
    attributes: ['id', 'description', 'createdAt', 'updatedAt'],
    raw: true
  });
}
