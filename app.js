require('dotenv').config({ path: `.env` })
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const booksRoute = require('./src/routes/books');
const usersRoute = require('./src/routes/users');

app.use(bodyParser.json());
//app.use(cors({ credentials: true, origin: [process.env.FRONTEND_URL] }));


// ROUTES
app.use('/books', booksRoute);
app.use('/users', usersRoute);


module.exports = app;