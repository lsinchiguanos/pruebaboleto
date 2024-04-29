require('dotenv').config()

const pool = {
    username: process.env.USUARIO,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORTDB,
    options: {
        dialect: process.env.DIALET
    }
}

export default pool;