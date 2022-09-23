const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../.env')
});
const appName = process.env.APP_NAME;
const appVersion = process.env.APP_VERSION;
const appSecret = process.env.APP_JWT_SECRET;
const encryption = require('../src/config/ecdc');
const ecdc = new encryption(appSecret);
(async ()=>{
    let param = {
        mode: "serverside",
        app : appName,
        version: appVersion
    }
    let param2 = {
        mode: "clientside",
        app : appName,
        version: appVersion
    }
    let param3 = {
        mode: "clientside",
        app : appName,
        version: appVersion,
        sessionId: "ce16aa7f-f220-4a29-98d8-9ad0a3f7e285",
        token: "ini token"
    }
    try {
        let obj = param2;
        let test = ecdc.enc(JSON.stringify(obj));
        let test1 = ecdc.dec(test);
        let result = encodeURIComponent(test);
        console.log(obj, result)
    }catch (e) {
        console.error(e);
    }
})()