import { UserMapper } from "../../../infraestructure/database/models/User"

export const createUser = async (req: any) => {
    const mapper = await UserMapper()
    const { name, email, password, role, permissions } = req;

    return await mapper.create({
        name,
        email,
        password,
        role,
        permissions
      });
}

export const getUser = async (req: any) => {
  const mapper = await UserMapper()
  const { email } = req;
  
  return await mapper.findOne({
    where: {email: email}  
  });
}
