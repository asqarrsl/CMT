const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url:String,
    filename:String
});

imageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload','/upload/w_300');
});


const eventSchema = new Schema ({
    eventName : String, 
    description : String, 
    eventType : String, 
    venue : String,    
    mainImg : [imageSchema],
    duration:{
        From : Date,
        To : Date
    },
    presenterId : [{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
    editorId : {
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    isApproved : {
        type:String,
        default:'0'
    }, 
    isDeleteReq : {
        type:String,
        default:'0'
    }, 
    isActive : {
        type:String,
        default:'1'
    }, 
}, {
    timestamps: true
});

module.exports = mongoose.model('Event',eventSchema);