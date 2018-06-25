const { Client } = require('pg');
const express = require('express');

// create an express application
const app = express();
app.use(express.json());
// create a postgresql client
const client = new Client({
    database: 'foodApp'
});

app.get("/data", (req, res) => {
    res.end("cheesedingle")
});