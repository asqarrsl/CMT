const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    reviewer:{
        specialization:String
    },
    participants:{
        type:String,
        designation:String,
        affiliation:String,
        isPaid:{
            type:String,
            default:'0'
        }
    },
    bio:String,
    isActive:{
        type:String,
        default:'1'
    }

},{
    timestamps: true
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema)