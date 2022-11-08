const getAllFiles = (req, res) => {
  res.send("Get all files");
};

const uploadFile = (req, res) => {
  res.send("Upload File");
};

module.exports = {
  getAllFiles,
  uploadFile,
};
