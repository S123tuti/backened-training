const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// <<--------------------------------------createuser---------------------------------------------->>
const createUser = async function (req, res) {
  try {
  let data = req.body; 
  if(data){ 
  } else{ 
    res.status(400).send({msg: "bad request"})
  }
  let savedData = await userModel.create(data);
  res.status(200).send({ msg: savedData });
}
catch (err)
{
  console.log("This is the error", err)
  res.status(500).send({msg: "server error", error:err})
}
}

// <<------------------------------------------loginUser------------------------------------------->>

const loginUser = async function (req, res) {
  try {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(401).send({status: false, msg: "username or the password is not corerct"})
  } catch (err)
  {
    res.status(500).send({msg: "server error", error:err})  
  }
  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
}

// <<---------------------------------------getuserdata------------------------------------------------------->>

const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}  catch(err)
{
 res.status(500).send({msg: "server error", errror: err})
} 
}

// <<---------------------------------------update user------------------------------------------------>>
const updateUser = async function (req, res) {
  try{ 
 let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).send("No such user exists");
  }
 let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: updatedUser, data: updatedUser });
}catch(err){
  res.status(500).send({msg: "server error", error: err})
}
}
//  ---------------------------------------------------------------------------------------------
const postMessage = async function (req, res) {
    let message = req.body.message
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId

    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    return res.send({status: true, data: updatedUser})
}


// <<------------------------------------------deleteuser--------------------------------------------->>
const deleteUser = async function(req, res){
  try {
  let userId = req.params.userId
  if ( !userId){
    return res.status(404).send ({msg: "error", error:err})
  }
    let findId = await userModel.findByIdAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
  res.status(200).send (findId)   
  } catch(err){
    res.status(500).send({msg: "server error", error:err})
  }
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage

