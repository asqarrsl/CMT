const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const eventController = require('../controllers/event')
const {isLoggedIn,isAuthor,authenticateJWT} = require('../middleware');

const multer = require('multer');
const {storage} = require('../cloudinary')
const upload = multer({storage})
// const upload = multer({dest:'u ploads/'})

router.route('/')
    .get(catchAsync(eventController.index))
    .post(upload.array('image'),catchAsync(eventController.store));
    // .post(isLoggedIn,upload.array('image'),catchAsync(eventController.store));

// router.get('/new',isLoggedIn,eventController.create);

router.route('/:id')
    .get(catchAsync(eventController.show))
    .put(authenticateJWT,upload.array('image'),catchAsync(eventController.update))
    .delete(authenticateJWT,catchAsync(eventController.delete));
    // .delete(isLoggedIn,catchAsync(eventController.delete));


router.post('/:id/approve',authenticateJWT,catchAsync(eventController.approve));
// router.post('/:id/approve',isLoggedIn,isAuthor,catchAsync(eventController.edit));

module.exports = router;