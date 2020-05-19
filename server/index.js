const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const request = require("request-promise");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  request({
    method: "GET",
    url: " https://corona-api.com/countries/IN",
    resolveWithFullResponse: true
  })
    .then(r => {
      let data = JSON.parse(r.body);
      let india_data = data.data;
      res.send(india_data);
    })
    .catch();
});

const news_url =
  "https://newsapi.org/v2/everything?q=coronavirus&apiKey=" +
  process.env.API_KEY;

app.get("/news", (req, res) => {
  request({
    method: "GET",
    url: news_url,
    resolveWithFullResponse: true
  })
    .then(r => {
      let data = JSON.parse(r.body);
      res.send(data.articles);
    })
    .catch();
});

console.log("Server Up and running");

app.listen(8000);
