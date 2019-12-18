const express = require('express');
const parser = require('body-parser');
const app = express();
app.use(parser.json());

app.get('/', (req, res) => {
  console.log();
  res.send(`Testing custom runtime on flexisble app engine with endpoints`);
});

app.post('/echo', (req, res) => {
  res.status(200).json({message: req.body.message});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});