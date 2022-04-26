const express = require('express')
const sendMail = require('../controller')
const app = express.Router()

app.post('/api/mailer/reservation', sendMail.reservation)
app.post('/api/mailer/contact-us', sendMail.contactUs)

module.exports = app