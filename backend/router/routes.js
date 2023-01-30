const activate__controller = require('../controller/activate__controller');
const auth__controller = require('../controller/auth__controller');
const auth__middleware = require('../middleware/auth__middleware');

const router = require('express').Router();


router.post('/api/v1/send-otp',auth__controller.sendOtp)
router.post('/api/v1/verify-otp',auth__controller.verifyOtp)
router.post('/api/v1/activate', auth__middleware ,activate__controller.activate)
router.get('/api/v1/refresh',auth__controller.refresh);
router.post('/api/v1/logout',auth__middleware,auth__controller.logout)

module.exports = router