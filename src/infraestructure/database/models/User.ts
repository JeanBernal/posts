import { Model, DataTypes } from "sequelize";
import database from "../dbconect";

export class User extends Model{
    id: string | undefined;
    name: string | undefined;
    password: string | undefined;
    permissions: string | undefined;
}

export const UserMapper = async ()=>{

    let sequelize = await database()

    let mapper = User.init(
        {
            id: {
                type: DataTypes.STRING(255),
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            password: { 
                type: DataTypes.STRING(255),
                allowNull: false
            },
            role: { 
                type: DataTypes.STRING(255),
                allowNull: false
            },
            permissions: { 
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tableName: "users",
            schema: 'public',
            sequelize,
            timestamps: true
        }
    )

    return mapper
}