const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const recipe = require('./recipe/recipe.json')

app.use(cors());

app.get("/", (req, res) => {
  res.send("World indian spicy recipe comming soon....");
});

app.get("/recipe", (req, res) => {
  res.send(recipe);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
