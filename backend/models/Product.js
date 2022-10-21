const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the Title"],
    },
    desc: {
        type: String,
    },
    price:{
        type: Number,
        required: [true, "Please enter the Price"],
    },
    image: {
        public_id: String,
        url: String,
      },
    category:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("product", productSchema);