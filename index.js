const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");

const data = require("./metadata/hidden/191.json");

const server = http.createServer(app);

const port = process.env.PORT || 3009;
require("dotenv").config();

console.log("we have", data);

app.get("/products", async (req, res, next) => {
  console.log("Hello products");
});

server.listen(port, () => console.log("Listning on port 3009"));
