const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String, 
        require: true
    }, 
    authorName: String, 
   
    year: {
        type: Number,
         default:2021
        },
    tags: [String],

    prices: {
        indianPrice: String,
        europeanPrice: String,
    },
    totalPages: Number ,
    stockAvailable: Boolean,
}, { timestamps: true });



module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
