const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const app = express();
app.use(bodyParser.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'vue_mysql'
})

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
})
