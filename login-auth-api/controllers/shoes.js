const { StatusCodes } = require("http-status-codes");
const Shoe = require("../models/shoe");

const getAllShoes = (req, res) => {
  res.send("Get all shoes");
};

const uploadShoe = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const shoe = await Shoe.create(req.body);
  res.status(StatusCodes.CREATED).json({ shoe });
};

const updateShoe = (req, res) => {
  res.send("Update Shoe");
};

const deleteShoe = (req, res) => {
  res.send("Delete Shoe");
};

const getSpecificShoe = (req, res) => {
  res.send("Get kiatu specific");
};

module.exports = {
  getAllShoes,
  uploadShoe,
  updateShoe,
  deleteShoe,
  getSpecificShoe,
};
