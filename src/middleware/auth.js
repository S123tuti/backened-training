const middle = async function(req, res, next){
let token = req.headers["x-auth-token"];
if (!token) {
  return res.send ({ msg: "token absent"})
}
next()
}


module.exports.middle = middle