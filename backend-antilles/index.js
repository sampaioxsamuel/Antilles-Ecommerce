const express = require("express");
const app = express();
const data = require("./data.json");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//List all products
app.get("/products", (request, response) => {
  response.json(data);
});

//List especific product
app.get("/products/:id", (request, response) => {
  const { id } = request.params;
  const client = data.find((cli) => cli.id == id);

  response.json(client);
});

app.listen(8000, () => {
  console.log("server is running on 8000 port");
});
