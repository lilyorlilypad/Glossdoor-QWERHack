const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { finalErrorHandler } = require("./middleware/errors.middleware");
const { InvariantError } = require("./utils");

dotenv.config();

const app = express();

// Frontal middleware.
app.use(express.json());
app.use(cors());

// Register controllers.
const controllers = [];
for (const controller of controllers) {
  app.use(controller.path, controller.router);
}

// Fallback middleware.
app.use(finalErrorHandler);

// Connect to database.
const { DB_CONN_STRING, DB_NAME } = process.env;
if (DB_CONN_STRING === undefined || DB_NAME === undefined) {
  throw new InvariantError("missing database environment variable(s)");
}
mongoose.connect(DB_CONN_STRING, { dbName: DB_NAME });

module.exports = app;
