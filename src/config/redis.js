'use strict';
const { createClient } = require('redis');
const logger = require('./logger');
const { redisConfig } = require('./vars');
let redisClient = createClient({
    password: redisConfig.redisPass,
    socket: {
        host: redisConfig.redisHost,
        port: '6379'
    },
    database: redisConfig.redisDatabase,
});
/**
 * Connect to redis db
 *
 * @returns {object} Redis pooling connection
 * @public
 */
const connect = async () =>{
    await redisClient.connect();
    await redisClient.ping();
    logger.info(`'redisDB connected to ${redisConfig.redisHost} database ${redisConfig.redisDatabase}`);
    return redisClient;
}
module.exports = {
    connect,
    redisClient,
}
