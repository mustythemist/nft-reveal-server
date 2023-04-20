const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const fs = require("fs");

const data = require("./metadata/hidden/191.json");
const data_revealed = require("./metadata/revealed/191.json");

const server = http.createServer(app);

const port = process.env.PORT || 3009;
require("dotenv").config();

// console.log("we have", data_revealed);

const newData = [
  {
    id: 1233,
  },
];
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get("/nft", async (req, res, next) => {
  console.log(req.url);
  console.log("Hello products");
  // fs.writeFileSync("./metadata/hidden/191.json", JSON.stringify(newData));

  const str = req.url;
  const parts = str.split("?");
  id = parts[1];
  console.log(id);

  const filePathRead = `./metadata/revealed/${id}.json`;
  const revealedData = fs.readFileSync(filePathRead, "utf-8");

  fs.writeFileSync(`./metadata/hidden/${id}.json`, revealedData);
  // res("Updated hidden data with revealed data", revealedData);
  res.status(200).json(JSON.parse(revealedData));
});

server.listen(port, () => console.log("Listning on port 3009"));
