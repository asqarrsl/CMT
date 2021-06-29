const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const eventController = require('../controllers/event')
const {isLoggedIn,isAuthor} = require('../middleware');

const multer = require('multer');
const {storage} = require('../cloudinary')
const upload = multer({storage})
// const upload = multer({dest:'u ploads/'})

router.route('/')
    .get(catchAsync(eventController.index))
    .post(catchAsync(eventController.store));
    // .post(isLoggedIn,upload.array('image'),catchAsync(eventController.store));

// router.get('/new',isLoggedIn,eventController.create);

router.route('/:id')
    .get(catchAsync(eventController.show))
    .put(isLoggedIn,isAuthor,upload.array('image'),catchAsync(eventController.update))
    .delete(isLoggedIn,isAuthor,catchAsync(eventController.delete));


router.get('/:id/edit',isLoggedIn,isAuthor,catchAsync(eventController.edit));

module.exports = router;