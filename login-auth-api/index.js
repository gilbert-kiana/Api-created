require("dotenv").config();
const express = require("express");
const app = express();

//middleware
app.use(express.json());

//connect db
const connectDb = require("./db/connect");

//authenticate user
const authenticateUser = require("./middleware/authentication");
const errorHandlerMiddleware = require("./middleware/error-handler");

//routers
const authRouter = require("./routes/auth");
const shoesRouter = require("./routes/shoes");

app.use(errorHandlerMiddleware);

app.use(express.json());

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/shoes", authenticateUser, shoesRouter);

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
