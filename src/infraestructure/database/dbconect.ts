import { Sequelize } from 'sequelize';
import config from '../../app/config';

const database = async () =>{
    
    return new Sequelize(config.db.database, config.db.username, config.db.password, {
        dialect: 'postgres',
        dialectOptions: {
            connectTimeout: 30000
        }
    });
}
export default database;