import { Model, DataTypes } from "sequelize";
import database from "../dbconect";

export class Post extends Model{
    id: string | undefined;
    description: string | undefined;
}

export const PostMapper = async ()=>{

    let sequelize = await database()

    let mapper = Post.init(
        {
            id: {
                type: DataTypes.STRING(255),
                autoIncrement: true,
                primaryKey: true
            },
            description: {
                type: DataTypes.STRING(500),
                allowNull: false
            }
        },
        {
            tableName: "posts",
            schema: 'public',
            sequelize,
            timestamps: true
        }
    )

    return mapper
}