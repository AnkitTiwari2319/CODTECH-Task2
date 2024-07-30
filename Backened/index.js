const express = require("express");
const app = express();

// const mongoDb = require("./config/database");

// mongoDb();
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://0.0.0.0:27017/Portfolio')
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Error in establishing database connection:', err);
//   });


app.use(express.json());
app.listen(3000 , (req , res) => {
    console.log ("Server started");
})
