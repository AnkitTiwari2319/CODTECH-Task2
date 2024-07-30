const mongoose = require('mongoose');

const socailLinksSchema = new mongoose.Schema({
    linkedin : String ,
    github : String ,
    twitter : String ,
    instagram : String ,
});

const userSchema = new mongoose.Schema({

    name : {
        type :  String ,
        required : true ,
    } , 

    bio : {
        type :  String ,
        required : true ,
    } ,

    profileImage : {
        type :  String,
        required : true ,
    } ,

    email : {
        type :  String ,
        required : true ,
    },

    socialLinks : socailLinksSchema ,


});

module.exports = mongoose.model('User' , userSchema);