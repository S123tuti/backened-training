const UserModel = require("../models/userModel")

const createUser = async function (req, res){
    const data = req.body

    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

module.exports.createUser = createUser