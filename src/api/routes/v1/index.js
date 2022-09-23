const path = require('path')
const express = require('express');
const spotRoute = require('./spotSignals.route');
const futureRoute = require('./futureSignals.route');
const router = express.Router();
/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));
/**
 * GET v1/docs
 */
router.use('/docs', express.static(path.join(__dirname, '/public/doc/index.html')));
/**
 * v1/spot/
 **/
router.use('/spot', spotRoute);
/**
 * v1/future/
 **/
router.use('/future', futureRoute);
module.exports = router;