const mongoose = require ('mongoose');

const educationSchema =  new mongoose.Schema({

    insitution : {
        type : String,
        required : true ,
    } , 

    degree : {
        type: String,
        required: true,
    },

    fieldOfStudy : {
        type: String,
        required: true,
    },

    startDate : {
        type : Date ,
    },

    endDate : {
        type : Date ,
    } ,

    description : {
        type : String ,
        required : true ,
    }


} , {timestamps : true});

module.exports = mongoose.model('Education' , educationSchema);