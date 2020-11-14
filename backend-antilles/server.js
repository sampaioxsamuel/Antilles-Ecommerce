const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const data = require('./data.json');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/'));

app.listen(port, () => {
  console.log(`server is running on ${port} port`);
});

//List all products
app.get('/products', (request, response) => {
  response.json(data);
});

//List especific product
app.get('/products/:id', (request, response) => {
  const { id } = request.params;
  const client = data.find((cli) => cli.id == id);

  response.json(client);
});
