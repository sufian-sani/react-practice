const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome'));
app.post('/', (req, res) => res.send(`Hello ${req.body.name}`));

app.listen(8000, () => console.log('Server running on port 8000'));