const express = require('express');
const app = express();
const data = require('./data.json');

app.use(express.json());

app.get('/products', (request, response) => {
  response.json(data);
});

app.listen(3000, () => {
  console.log('server is running on 3000 port');
});
