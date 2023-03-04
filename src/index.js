const PORT = 8000;
import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import { sites } from "./sites.js";

const app = express();

let facts = [];
let id = 0;

sites.forEach((site) => {
  axios
    .get(site.address)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      $("li:not(:has(>a))", html).each(function () {
        const fact = $(this).text();
        if (fact !== " " && fact !== "Close this sub-navigation") {
          facts.push({ id, fact });
          id++;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/", (req, res) => {
  res.json("Welcome to the Interesting Climate Facts API");
});

//* get random facts
app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const randomFact = facts[randomIndex].fact;
  res.json(randomFact);
});

//* get a list of all the facts
app.get("/facts", (req, res) => {
  res.json(facts);
});

//* get a fact by ID
app.get("/fact/:id", async (req, res) => {
  const factId = req.params.id;
  const getById = facts.filter((fact) => fact.id == factId)[0]?.fact;
  if (getById) {
    res.json(getById);
  } else {
    res.status(404).json({ error: `Fact with ID ${factId} not found` });
  }
});

//* get facts by keyword

app.get("/search/:term", (req, res) => {
  const searchTerm = req.params.term.toLowerCase();
  const searchResults = facts.filter((fact) => {
    if (fact.fact) {
      return fact.fact.toLowerCase().includes(searchTerm);
    } else {
      res.status(404).json({ error: `Fact with term ${searchTerm} not found` });
    }
  });
  res.json(searchResults);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

//module.exports = app;
