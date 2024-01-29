require("dotenv").config();
const express = require("express");
const app = express();

const mainRouter = require("./routes/main.routes");
const notFoundMiddleware = require("./middleware/notFound.middleware");
const errorHandlerMiddleware = require("./middleware/errorHandler.middleware");

//middleware
app.use(express.json());

//routes
app.use("/api/v1", mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = () => {
  try {
    // await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
