const Shoe = require("../models/shoe");
const { StatusCodes } = require("http-status-codes");
const NotFoundError = require("../errors/not-found");

const getAllShoes = async (req, res) => {
  const shoe = await Shoe.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ shoe, count: shoe.length });
};

const uploadShoe = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const shoe = await Shoe.create(req.body);
  res.status(StatusCodes.CREATED).json({ shoe });
};

const updateShoe = async (req, res) => {
  const {
    body: { brand, name, gender, price, shop, size, status },
    user: { userId },
    params: { id: shoeId },
  } = req;

  if (
    brand === "" ||
    name === "" ||
    gender === "" ||
    price === "" ||
    shop === "" ||
    size === "" ||
    status === ""
  ) {
    throw new BaseRequestError("Please fill out all the postions");
  }

  const shoe = await Shoe.findByIdAndUpdate(
    {
      _id: shoeId,
      createdBy: userId,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!shoe) {
    throw new NotFoundError(`No shoe with id ${shoeId}`);
  }
  res.status(StatusCodes.OK).json({ shoe });
};

const deleteShoe = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const shoe = await Shoe.findByIdAndRemove({ _id: jobId, createdBy: userId });
};

const getSpecificShoe = async (req, res) => {
  const {
    user: { userId },
    params: { id: shoeId },
  } = req;

  const shoe = await Shoe.findOne({
    _id: shoeId,
    createdBy: userId,
  });
  if (!shoe) {
    throw new NotFoundError(`No job with id ${shoeId}`);
  }
  res.status(StatusCodes.OK).json({ shoe });
};

module.exports = {
  getAllShoes,
  uploadShoe,
  updateShoe,
  deleteShoe,
  getSpecificShoe,
};
