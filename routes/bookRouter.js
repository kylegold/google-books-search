const Router = require("express").Router();
const db = require("../models");

Router.get("/books", (req, res) => {
  db.Book.find({}, (err, data) => {
    if (err) {
      throw err
    }
    else {
      res.json(data)
    }
  })
})

Router.post("/books", (req, res) => {
  db.Book.create(req.body, (err, data) => {
    if (err) {
      throw err
    }
    else {
      res.json(data)
    }
  })
})

Router.delete("/books/:id", (req, res) => {
  db.Book.findByIdAndDelete(req.params.id, (err, book) => {
    if (err) {
      throw err
    }
    else{
      console.log(book)
    }
  })
})
module.exports = Router;

