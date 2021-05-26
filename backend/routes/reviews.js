const express = require('express');
const router = express.Router({mergeParams:true});
const catchAsync = require('../utils/catchAsync');
const reviewController = require('../controllers/reviews')
const {validateReview,isLoggedIn,isReviewAuthor} = require('../middleware');

router.post('/',isLoggedIn,validateReview,catchAsync(reviewController.store));
router.delete('/:reviewId',isLoggedIn,isReviewAuthor,catchAsync(reviewController.delete));

module.exports = router;