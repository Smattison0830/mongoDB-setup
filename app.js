const express = require("express");
const bodyParser = require("body-parser");
database = require("./mongo");

const app = express();

app.use(bodyParser.json());

app.post("/products", database.createProduct);

app.get("/products");

app.listen(3000);
