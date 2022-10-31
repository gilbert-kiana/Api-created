const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, "please provide Brand name"],
      Maxlength: 50,
    },
    name: {
      type: String,
      required: [true, "Please Provide Shoe name"],
    },
    gender: {
      type: Boolean,
      default: true,
    },
    price: {
      type: Number,
      required: [true, "Enter Price of the shoe"],
    },
    shop: {
      type: String,
      required: [true, "Enter the Shop where it is available"],
    },
    size: {
      type: Number,
      required: [true, "Enter the shoe size in cm"],
    },
    status: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please Provide User"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shoe", shoeSchema);
