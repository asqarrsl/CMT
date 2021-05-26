const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const campgroundController = require('../controllers/campground')
const {isLoggedIn,isAuthor,validateCampground} = require('../middleware');

const multer = require('multer');
const {storage} = require('../cloudinary')
const upload = multer({storage})
// const upload = multer({dest:'u ploads/'})

router.route('/')
    .get(catchAsync(campgroundController.index))
    .post(isLoggedIn,upload.array('image'),validateCampground,catchAsync(campgroundController.store));

router.get('/new',isLoggedIn,campgroundController.create);

router.route('/:id')
    .get(catchAsync(campgroundController.show))
    .put(isLoggedIn,isAuthor,upload.array('image'),validateCampground,catchAsync(campgroundController.update))
    .delete(isLoggedIn,isAuthor,catchAsync(campgroundController.delete));


router.get('/:id/edit',isLoggedIn,isAuthor,catchAsync(campgroundController.edit));

module.exports = router;