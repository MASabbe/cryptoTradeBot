const Joi = require('joi');
const User = require('../models/user.model');
module.exports = {
    spot: {
        body: Joi.object().keys({

        }),
    },
    future: {
        body: Joi.object().keys({

        }),
    }
}