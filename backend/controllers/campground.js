const Campground = require('../models/campground');
const {cloudinary} = require('../cloudinary')
module.exports.index = async (req,res)=>{
    const campgrounds = await Campground.find({});
    res.json(campgrounds);
    // res.render('campgrounds/index',{campgrounds});
}

module.exports.create = (req,res)=>{
    res.render('campgrounds/new');
}
module.exports.store = async (req,res)=>{
    const campground = new Campground(req.body.campground);
    campground.images = req.files.map(f=>({url:f.path,filename:f.filename}))  
    campground.author = req.user._id;
    await campground.save();
    
    req.flash('success','Successfully made a new campground!');
    res.redirect(`/campgrounds/${campground._id}`);
}
module.exports.show = async (req,res)=>{
    const campground = await Campground.findById(req.params.id).populate({
        path: 'reviews',
        populate:{
            path:'author'
        }
    }).populate('author');
    if(!campground){
        req.flash('error',"Couldn't find that Campground!");
        return res.redirect(`/campgrounds`);
    }
    console.log(campground);
    res.render('campgrounds/show',{campground});
}
module.exports.edit = async (req,res)=>{  
    const campground = await Campground.findById(req.params.id);
    if(!campground){
        req.flash('error',"Couldn't find that Campground!");
        return res.redirect(`/campgrounds`);
    }
    res.render('campgrounds/edit',{campground});
}
module.exports.update = async (req,res)=>{
    const {id} = req.params
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground});
    const img = req.files.map(f=>({url:f.path,filename:f.filename}))
    campground.images.push(...img);
    await campground.save();
    if (req.body.deleteImages) {
        for(let filename of req.body.deleteImages){
            await cloudinary.uploader.destroy(filename);
        }
        await campground.updateOne({$pull:{images:{filename:{$in:req.body.deleteImages}}}});
    }
    req.flash('success','Successfully Updated the campground!');
    res.redirect(`/campgrounds/${campground._id}`);
}
module.exports.delete = async (req,res)=>{
    const {id} = req.params    
    const campground = await Campground.findByIdAndDelete(id);
    req.flash('success','Successfully Deleted a campground!');
    res.redirect(`/campgrounds`);
}