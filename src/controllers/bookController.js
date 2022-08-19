const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await bookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks

// module.exports.bookrange=bookrange

const createauthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData })
}

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send(savedData)
}

const listBook = async function (req, res) {
    let findauthor = await bookModel.find({author_name: "Chetan Bhagat"});
    let findbook = await bookModel.find({author_id: {$eq: findauthor[0].author_id}});
    res.send({msg: findbook})
}

const updateBooks= async function(req, res) {
    let bookprice = await bookModel.findOneAndUpdate({name: "Two states"}, {$set:{price: 100}}, {new: true});
    let updateprice= bookprice.price;
    let authorUpdate= await authorModel.find({author_id: {$eq: bookprice.author_id}}).select({author_name:1,_id:0});
    res.send({authorUpdate, updateprice})
}

const bookrange = async function (req, res) {
    let range = await bookModel.find({price : { $gte: 50, $lte: 100}});
    let x = range.map(y => y.author_id);
    let newrange = await authorModel.find({author_id: x}).select({author_name:1, _id:0});
    res.send(newrange)
}


module.exports.createauthor=createauthor
module.exports.createBook= createBook
module.exports.listBook= listBook
module.exports.updateBooks= updateBooks
module.exports.bookrange= bookrange

