const express = require('express');
const lodash = require('lodash');

//  const def = require('../logger/logger')
//  const ghi = require('../util/helper')
// const jkl = require('../validator/formatter')


const router = express.Router();

router.get('/test-me', function (req, res) {
    // def.printNa()
    // ghi.part();
    // ghi.c();
    // ghi.getBatchinfo();
    // jkl.asd();
    // jkl.sdm();
    // jkl.dmk();

const year = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
console.log(lodash.chunk(year, 3))

const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
console.log(lodash.tail(odd))

const num = [2, 3, 3, 5, 6, 8, 2]
console.log(lodash.union(num))


const entries =[['horror',"The Shining"],['drama',"Titanic"],['thriller', "Shutter Island"],['fantasy', "Pans Labyrinth"]]
console.log(lodash.fromPairs(entries))

   

    res.send('Hello')
});





router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason



