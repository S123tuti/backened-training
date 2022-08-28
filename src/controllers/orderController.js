const userModel = require("../models/userModel")
const productModel = require("../models/productModel")
const orderModel = require("../models/orderModel")


const createOrder = async function (req, res, next ){
     let data = req.body
     let abc = data.userId
     let userid= await userModel.findById(abc)
     if (!userid){
        return res.send({status: false, msg: "error"})
     }
     let alpha = data.productId
     let productid= await productModel.findById(alpha)
     if (!productid){
        return res.send({status: false, msg: "error"})
   }
   //  let savedData = await orderModel.create(data)
   //  res.send({msg: savedData})

    let freeAppUser = req.headers.isfreeappuser
    if (freeAppUser == "false"){ 
      if(userid.balance >= data.amount){
         let ordercreated = await orderModel.create(data)
         let update = await userModel.updateOne({_id: userid}, {$inc:{balance: - data.amount} })
          return res.send ({msg: ordercreated})
         } else if (userid.balance <= data.amount){
         return res.send({status: false, msg: "the user doesn't have enough balance"})
      }
    } else if (freeAppUser == "true"){
      data["amount"] = 0
      const upd = await orderModel.create(data)
      return res.send ({msg: upd})
    }
}


module.exports.createOrder = createOrder