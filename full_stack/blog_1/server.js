const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send({
        "message": "Node Server"
    });
})

const POST = process.env.POST || 8080
app.listen(POST, () => {
    console.log(`Server started on ${process.env.DEV_MODE} port no ${POST}`.bgCyan.white);
})