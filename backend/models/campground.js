const mongoose = require('mongoose');
const Reviews = require('./reviews');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url:String,
    filename:String
});

imageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload','/upload/w_300');
});
const CampgroundSchema = new Schema ({
    title:String,
    price:Number,
    description:String,
    location:String,
    images:[imageSchema],
    author:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});

CampgroundSchema.post('findOneAndDelete',async function(doc){
    if(doc){
        await Reviews.deleteMany({
            _id:{
                    $in:doc.reviews
                }
        })
    }
})
module.exports = mongoose.model('campground',CampgroundSchema);