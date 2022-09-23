const { validate, ValidationError, Joi } = require('express-validation');
const { authorizeApp } = require('../../middlewares/auth');
const { spot } = require('../../validations/signal.validation');
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/spotSignals.controller');
router.route('/').post(authorizeApp({app:"Bot",version:1}),validate(spot),controller.publish);
module.exports = router;