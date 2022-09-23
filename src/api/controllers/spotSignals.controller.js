const httpStatus = require('http-status');
exports.publish = (req, res, next) => {
    try {
        res.status(httpStatus.OK);
        return res.json({

        });
    }catch (e) {
        return next(e);
    }
}
