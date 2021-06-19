const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user');
const catchAsync = require('../utils/catchAsync');

router.route('/register')
    .post(catchAsync(userController.register));

router.route('/login')
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), userController.login);

router.get('/logout',userController.logout)

module.exports = router;