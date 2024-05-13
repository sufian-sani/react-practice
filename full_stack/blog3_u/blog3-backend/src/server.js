const express = require('express');
const bodyParser = require('body-parser');
// const {mongoClient} = require('mongoose');
const {MongoClient} = require("mongodb");

const app = express()

app.use(bodyParser.json());

app.get("/api/articles/:name", async (req, res) => {
    try{
        const articleName = req.body.name;
        const client = await MongoClient.connect('mongodb://localhost:27017',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db("blog_u")
        const articleInfo = await db.collection('articles').findOne({name:articleName})
        res.status(200).json(articleInfo)
        client.close()
    } catch (error){
        res.status(500).json({message: 'Error connecting to db', error})
    }
})

app.post("/api/articles/:name/add-comments", (req, res) => {
    const {username, text} = req.body
    const articleName = req.body.name
    articlesInfo[articleName].comment.push({username, text})
    res.status(200).send(articlesInfo[articleName]);
})

// app.get('/', (req, res) => res.send('Welcome'));
// app.post('/', (req, res) => res.send(`Hello ${req.body.name}`));
// app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));

app.listen(8000, () => console.log('Server running on port 8000'));