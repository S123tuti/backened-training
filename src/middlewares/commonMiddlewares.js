const middle = function (req, res, next){
   const abc = req.headers.isfreeappuser
   if(!abc){
    return res.send ("header mandatory")
   }
  next()
}

const middle2 = function (req, res, next){
    let isFreeUser = req.headers.isfreeappuser
    if(isFreeUser){
        if(isFreeUser === 'true')
        req.body.isFreeAppuser = true
        if(isFreeUser ==='false')
        req.body.isFreeAppUser = false
        next()
    }
    else {
        return res.send ({msg: "isFreeAppUser is required"})
    }
}

module.exports.middle = middle
module.exports.middle2 = middle2 







// const mid1= function ( req, res, next) {
    //     req.falana= "hi there. i am adding something new to the req object"
    //     console.log("Hi I am a middleware named Mid1")
    //     next()
    // }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }
// module.exports.middle=middle
// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
