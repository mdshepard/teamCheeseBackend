const { Client } = require('pg');
const express = require('express');
const cors = require('cors');

// create an express application and enable cors
const app = express();
app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// create a postgresql client

const client = new Client({
    database: 'foodApp'
});



app.get("/data", (req, res) => {
    res.end("cheesedingle")
});

app.listen( process.env.port || 3000, () => {
    console.log("this is working")
})