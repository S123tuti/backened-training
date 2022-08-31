const jwt = require('jsonwebtoken')

const authenticate = function(req, res, next) {
  try{
 let token = req.headers["x-auth-token"]
  if (!token) return res.status(401).send({ status: false, msg: "token must be present" })
  let decodedToken = jwt.verify(token, "functionup-thorium")

  if (!decodedToken){
    return res.status(401).send({ status: false, msg: "token is invalid" })
  }
  req.loggedInUser = decodedToken.userId
    next()
} catch(err){
  res.status(500).send({msg: "error", error: err})
} 
}


const authorise = function(req, res, next) {
    try {
    let requestedUserId = req.params.userId
    if(requestedUserId !== req.loggedInUser){
        return res.status(403).send({status: false, msg: "permission denied"})
    }
  next()
} catch(err){
  res.status(500).send({msg: "error", error: err})
}
}
module.exports.authenticate = authenticate
module.exports.authorise = authorise