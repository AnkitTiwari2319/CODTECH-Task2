const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGO_URL;
console.log(URL,'URL');

const dbconnect = () => {

// Connect to MongoDB
console.log("ankit");

    mongoose.connect(URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })

    .then(() => {
        console.log("Connection established successfully");
    })
    .catch((err) => {
        console.error("Error in establishing database connection:");
        console.error(err);
        process.exit(1);
    });

    console.log("ankit main hu");
}

module.exports = dbconnect ;
