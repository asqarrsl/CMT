const ExpressError = require('./utils/ExpressError');
const {reviewSchema,campgroundSchema} = require('./Schemas.js');
const Campground = require('./models/campground');
const Review = require('./models/reviews');
module.exports.isLoggedIn = (req,res,next)=>{
    console.log(req.isAuthenticated());
    if(!req.isAuthenticated()){
        req.status(401).send('error',"You Must Login First");
    }
    next();
}
module.exports.isAuthor = async (req,res,next)=>{
    const {id} = req.params;
    const campgrounds = await Campground.findById(id);
    if(!campgrounds.author.equals(req.user._id)){
        req.flash('error',"You Do Not Have Permission to Do that");
        return res.redirect(`/campgrounds/${id}`)
    }
    next();
}
module.exports.isReviewAuthor = async (req,res,next)=>{
    const {id,reviewId} = req.params;
    const reviews = await Review.findById(reviewId);
    if(!reviews.author.equals(req.user._id)){
        req.flash('error',"You Do Not Have Permission to Do that");
        return res.redirect(`/campgrounds/${id}`)
    }
    next();
}
module.exports.validateCampground = (req,res,next) =>{
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el=>el.message).join(',')
        throw new ExpressError(msg,400)
    }else{
        next();
    }
}
module.exports.validateReview = (req,res,next) =>{
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el=>el.message).join(',')
        throw new ExpressError(msg,400)
    }else{
        next();
    }
}