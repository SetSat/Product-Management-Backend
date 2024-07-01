const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"
        },
        ProductName: {
            type: String,
            required: true,
        },
        ProductPrice: {
            type: Number,
            required: true,
        },
        ProductBarcode: {
            type: Number,
            required: true,
        },
    });

const Products = mongoose.model("Products", ProductSchema)
module.exports = Products;
