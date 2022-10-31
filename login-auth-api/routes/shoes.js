const express = require("express");
const router = express.Router();

const {
  getAllShoes,
  uploadShoe,
  updateShoe,
  deleteShoe,
  getSpecificShoe,
} = require("../controllers/shoes");

router.route("/").post(uploadShoe).get(getAllShoes);
router.route("/:id").get(getSpecificShoe).patch(updateShoe).delete(deleteShoe);

module.exports = router;
