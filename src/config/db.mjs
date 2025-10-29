import { Sequelize } from "sequelize";
import env from "./env.mjs";

const sequelize = new Sequelize(
    env.DB_NAME,
    env.DB_USERNAME,
    env.DB_PASSWORD,
    {
        host: env.DB_HOST,
        port: env.DB_PORT,
        dialect: 'mysql'
    }
);

export default sequelize;