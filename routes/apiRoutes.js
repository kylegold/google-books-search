const Router = require("express").Router();
const bookRouter = require("./bookRouter")


Router.use("/", bookRouter);


module.exports = Router;