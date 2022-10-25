const getAllShoes = (req, res) => {
  res.send("Get all shoes");
};

const uploadShoe = (req, res) => {
  res.send("Upload Shoe ama create");
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
