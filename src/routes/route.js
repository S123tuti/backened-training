const express = require('express');
// const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    // let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')
// })


//           1

router.get('/GET/movies', function (req, res) {
    let movies = ['rang de basanti', 'don', 'lord of the rings', 'suryavansham' ]
    res.send(movies)
    console.log(movies)
})


//          2 & 3

router.get('/GET/movies/:indexNumber', function (req, res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
     let mno = req.params.indexNumber
if (mno > movies.length){
    return res.send ("not exist")
} else {
    console.log(movies[mno])
    res.send(movies[mno])
  }
})    

//       4

router.get('/GET/film', function (req, res){
    
   let film = [{
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]
       
    res.send(film)
    console.log(film)
})

// //        5

router.get('/GET/film/:filmId',function (req, res){
 let objectlist =
 [{
    id: 1,
    name: 'The Shining'
   }, {
    id: 2,
    name: 'Incendies'
   }, {
    id: 3,
    name: 'Rang de Basanti'
   }, {
    id: 4,
    name: 'Finding Nemo'
   }]

   objectlist.unshift(null)

    let avc = req.params.filmId
    if ( avc >= objectlist.length){
        return res.send ("movie not found ")
    }
    else{
        res.send(objectlist[avc])
        console.log(objectlist[avc])
    }
})

module.exports = router;
   
    
    
    



 
