const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const route = require('./route')
const app = express()

app.use(cors())

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set port, listen for requests
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Routes
app.use(route)