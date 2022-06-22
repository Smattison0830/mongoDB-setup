const express = require("express");
const bodyParser = require("body-parser");
const database = require("./mongoose");

const app = express();

app.use(bodyParser.json());

app.post("/products", database.createProduct);

app.get("/products", database.getProducts);

app.listen(3000);
