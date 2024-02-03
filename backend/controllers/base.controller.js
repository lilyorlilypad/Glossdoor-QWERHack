const express = require("express");

const { InvariantError } = require("../utils");

module.exports = class BaseController {
  router = express.Router();
  path = "";

  constructor(path) {
    if (typeof path !== "string" || !path) {
      throw new InvariantError("no router path provided");
    }
    this.path = path;
    this.initRoutes();
  }

  initRoutes() {
    throw new InvariantError("controller class does not override initRoutes");
  }
}
