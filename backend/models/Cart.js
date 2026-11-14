import mongoose from "mongoose";

const cartItmemSchema = new mongoose.Schema({
    productId:{type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    name:{type: String, required: true},
    image:{type: String, required: true},
    price:{type: Number, required: true},
    size:{type: String, required: true},
    color:{type: String, required: true},
    quantity:{type: Number, required: true, default: 1},
},
{
    _id: false
}
)

const cartSchema= new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    guestId: { type: String, required: true },
    cartItems: [cartItmemSchema],
    totalPrice: { type: Number, required: true, default: 0 },
},{
    timestamps: true
})

const Cart = mongoose.model('Cart', cartSchema)
export default Cart