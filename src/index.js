// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const app = require('./config/express');
const mysql = require('./config/mysql');
const redis = require('./config/redis');
const { v4: genuuid } = require('uuid');
const { appName,appVersion,port,env } = require('./config/vars');
const logger = require('./config/logger');
const { createServer } = require("http");
const httpServer = createServer(app);
// listen to requests
httpServer.listen(port, async () => {
    try{
        logger.info(`${appName} version ${appVersion.toUpperCase()} server started on port ${port} (${env})`);
        await Promise.all([
            // open mysql connection
            mysql.connect(),
            // open redis connection
            redis.connect(),
        ]);
    }catch (e) {
        logger.error(e.stack);
    }
});
/**
 * Exports express
 * @public
 */
module.exports = httpServer;