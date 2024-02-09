const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const bcrypt = require('bcrypt')

const app = new express();
app.use(express.json());
//client is running in port 3000
app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@foody.mg3thxk.mongodb.net/?retryWrites=true&w=majority');
client.connect();

const db = client.db("Hotels")
const col = db.collection("Restroes")

app.get('/home', (req, res) => {
    res.send("It is a Home Page - New Page - New 2 Page")
})

app.post('/insert', async (req, res) => {
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data Received")
})

app.listen(8081);
console.log("Server Running");