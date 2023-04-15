const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = require("./schema");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose
  .connect("mongodb://147.50.227.164:27017/data", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/yeekee5", async (req, res) => {
  Schema.find()
    .then((result) => {
      result.sort(function (a, b) {
        return Number(a.round) - Number(b.round);
      });
      res.status(200).send(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
app.listen(4002, () => {
  console.log("Server listening on port 3002");
});
