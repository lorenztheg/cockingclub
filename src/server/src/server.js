const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config')
const {sequelize} = require('./models')
const cookieParser = require('cookie-parser');
const session = require('express-session');



const app = express();

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

sequelize.sync()
    .then(() => {
app.listen(config.port);
console.log(`Server started on http://localhost:${config.port}`);
    }
)