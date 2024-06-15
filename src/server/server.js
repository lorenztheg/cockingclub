const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const morgan = require('morgan');
const cors = require('cors');
const {sequelize} = require('./models')
const config = require('./config/config')




const app = express();
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())


app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered! Have fun!`
    })
})

sequelize.sync({force: true})
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on http://localhost:${config.port}`)
    })



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
