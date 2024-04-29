import { Sequelize } from "sequelize";
import database from "./src/config/database";

const db = new Sequelize(
    database.database || '', database.username || '', database.password , {
        dialect: 'postgres',
        host: database.host
    }
);

export default db;