const jwt = require('jsonwebtoken')

const authenticate = function(req, res, next) {
 let token = req.headers["x-auth-token"]
  if (!token) return res.send({ status: false, msg: "token must be present" })
  let decodedToken = jwt.verify(token, "functionup-thorium")
  if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" })
  }
  req.loggedInUser = decodedToken.userId
    next()
}


const authorise = function(req, res, next) {
    
    let requestedUserId = req.params.userId
    if(requestedUserId !== req.loggedInUser){
        return res.send({status: false, msg: "permission denied"})
    }
    next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise