require("dotenv").config();
const express = require("express");
const app = express();

//middleware
app.use(express.json());

//connect db
const connectDb = require("./db/connect");

//routers
const authRouter = require("./routes/auth");

//routes
app.use("/api/v1/auth", authRouter);

//Port
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
