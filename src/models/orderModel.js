const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema ({

    user_id: {
        type: ObjectId,
        ref: "user"
},
product_id: {
    type: ObjectId,
    ref: "product"
},
amount: Number,
isFreeAppuser: Boolean,
date: {
    type: String,
    default: 25/08/22
}

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
