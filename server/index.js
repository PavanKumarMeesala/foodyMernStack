const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const bcrypt = require('bcrypt')

const app = new express();
app.use(express.json());
//client is running in port 3000
//any thord part application can be served, if the cors is enabled
app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@foody.mg3thxk.mongodb.net/?retryWrites=true&w=majority');
client.connect();
//outer one is cluster
//inside cluster is database
//inside database is collection (which is similar to mysql table)
//inside collection is document (which is similar to mysql table row or records)
const db = client.db("Hotels")
const col = db.collection("Restroes")

//from browser, the default url triggering is get method
//localhost:8081/home
//1st parameter is address and second parameter is service function
app.get('/home', (req, res) => {
    res.send("It is a Home Page - New Page - New 2 Page")
})

//1st parameter is address and second parameter is service function
//client send request to server which need to take
app.post('/insert', async (req, res) => {
    //every request will have header and body section
    //req = {header: ...., body: actual_data}
    // req.body.password = await bcrypt.hash(req.body.password, 5)
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data Received")
})

app.listen(8081);
console.log("Server Running");