const Review = require('../models/reviews');
const Campground = require('../models/campground');
module.exports.store = async (req,res)=>{
    // if(!req.body.campground) throw new ExpressError('Invalid Campground Data',400);
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success','Successfully added a Review');
    res.redirect(`/campgrounds/${campground._id}`);
}

module.exports.delete = async (req,res)=>{
    const {id,reviewId} = req.params
    const campground = await Campground.findByIdAndUpdate(id, {$pull :{reviews:reviewId}});
    const review = await Review.findByIdAndDelete(reviewId);
    req.flash('success','Successfully Deleted a Review!');
    res.redirect(`/campgrounds/${id}`);
}