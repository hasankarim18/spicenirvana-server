const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const recipes = require('./data/recipe/recipe.json')
const chefs = require('./data/chefs/chejs.json')
const general = require('./data/general/general.json')

app.use(cors());

app.get("/", (req, res) => {
  res.send("World indian spicy recipe comming soon....");
});

app.get('/chefs', (req, res)=> {
  res.send(chefs)
} )

app.get('/chefs/:id', (req, res)=> {
   const id = req.params.id;
   const selectedChefs = chefs.find((r) => r.chef_id === id);
   res.send(selectedChefs);
} )

app.get("/recipes", (req, res) => {
  res.send(recipes);
});



app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const selectedRecipies = recipes.filter((r) => r.chef_id === id);
  res.send(selectedRecipies)
});

// general 

app.get('/general', (req, res)=> {
  res.send(general);
} )



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
