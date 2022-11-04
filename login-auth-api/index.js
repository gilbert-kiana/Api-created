require("dotenv").config();
const express = require("express");
const app = express();

//extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

//Swagger
const SwaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const SwaggerDocument = YAML.load("./swagger.yaml");

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

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use("/api-use", SwaggerUi.serve, SwaggerUi.setup(SwaggerDocument));

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
