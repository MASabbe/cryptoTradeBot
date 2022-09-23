'use strict';
const mysql = require('mysql');
const logger = require('./logger');
const { mysqlConfig, env } = require('./vars');
let mysqlOptions = {
    "host": mysqlConfig.Mysql_DB_HOST,
    "user": mysqlConfig.Mysql_DB_USER,
    "password": mysqlConfig.Mysql_DB_PASS,
    "database": mysqlConfig.Mysql_DB_DATABASE,
    "connectionLimit":"50",
    "multipleStatements": true,
    "timezone": "UTC"
}
// print mysql logs in dev env
if (env === 'development') {
    Object.assign(mysqlOptions, {debug: false});
}
/**
 * Connect to mysql db
 *
 * @returns {object} Mysql pooling connection
 * @public
 */
const pool = mysql.createPool(mysqlOptions);
exports.connect = ()=>{
    pool.getConnection((err, connection) => {
        if (err) {
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                logger.error('Database connection was closed.')
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
                logger.error('Database has too many connections.')
            }
            if (err.code === 'ECONNREFUSED') {
                logger.error('Database connection was refused.')
            }
        }
        logger.info('mysqlDB connected to '+mysqlOptions.host+" ("+mysqlOptions.database+")");
        return connection
    });
}
exports.pool = pool;
