const { Client } = require('pg');
const express = require('express');
const cores = require('cors')

// create an express application and enable cors
const app = express();
app.use(express.json());
app.use(cors());
// create a postgresql client

const client = new Client({
    database: 'foodApp'
});

app.get("/data", (req, res) => {
    res.end("cheesedingle")
});