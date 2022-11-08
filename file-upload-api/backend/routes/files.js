const express = require("express");
const router = express.Router();
const { getAllFiles, uploadFile } = require("./../controllers/files");

router.route("/").get(getAllFiles).post(uploadFile);

module.exports = router;
