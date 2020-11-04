const express = require("express");
const app = express();
const data = require("./data.json");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/products", (request, response) => {
  response.json(data);
});

app.listen(8000, () => {
  console.log("server is running on 3000 port");
});
