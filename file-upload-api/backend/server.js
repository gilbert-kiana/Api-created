const express = require("express");
const app = express();
const files = require("./routes/files");
const connectDb = require("./db/connect");
require("dotenv");

//middleware
app.use(express.json());

app.use("/api/v1/files", files);

app.get("/", (req, res) => {
  res.send("Kaiser It worked");
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
