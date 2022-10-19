require("dotenv").config();
require("./db/connect");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const notes = require("./routes/notes");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("lofi from browser");
});

app.use("/api/v1/notes", notes);

//connect db
const connectDb = require("./db/connect");

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
