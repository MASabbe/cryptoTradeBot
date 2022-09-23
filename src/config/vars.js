const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../../.env')
});
module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    appName: process.env.APP_NAME,
    appVersion: process.env.APP_VERSION,
    jwtSecret: process.env.APP_JWT_SECRET,
    jwtExpirationInterval: process.env.APP_JWT_EXPIRATION_MINUTES ? process.env.APP_JWT_EXPIRATION_MINUTES : 30,
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
    redisConfig: {
        redisHost:process.env.REDIS_DB_HOST,
        redisPass:process.env.REDIS_DB_PASS,
        redisDatabase:process.env.REDIS_DB_DATABASE,
    },
    mysqlConfig: {
        Mysql_DB_HOST: process.env.MYSQL_DB_HOST,
        Mysql_DB_USER: process.env.MYSQL_DB_USER,
        Mysql_DB_PASS: process.env.MYSQL_DB_PASS,
        Mysql_DB_DATABASE: process.env.MYSQL_DB_DATABASE
    },
};