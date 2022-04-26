const express = require('express')
const { customAlphabet } = require('nanoid')
const nanoid = customAlphabet('1234567890abcdef', 10)
const { sendEmail } = require('../utils/node-mailer')

class sendMail {
    static async reservation(req, res) {
        const datetime = new Date()

        try {
            const { totalPax, specialRequest, name, phone, email } = req.body
            const emailSubject = '[BOND Jakarta] Reservation'

            if(req.body) {
                const reservationId = nanoid()
                const reservationData = req.body
                reservationData.reservationId = reservationId
                reservationData.requestDate = datetime.toISOString().slice(0,10)
                
                await sendEmail(reservationData, emailSubject)

                res.json({
                    statusCode: 200,
                    message: 'reservation email sent.',
                    data: reservationData
                })

                console.log('200 reservation email sent.')

            } else {
                res.json({
                    statusCode: 400,
                    message: 'please fill in the form.'
                })

                console.log('40 please fill in the form.');
            }

        } catch (error) {
            res.json({
                statusCode: 500,
                message: 'internal server error.',
                error
            })

            console.log('500 internal server error.');
        }
    }

    static async contactUs(req, res) {
        try {
            const { name, city, email, message } = req.body
            const emailSubject = '[BOND Jakarta] Contact Us'

            if(req.body) {
                const contactUsId = nanoid()
                const contactUsData = req.body
                contactUsData.contactUsId = contactUsId
                
                await sendEmail(contactUsData, emailSubject)

                res.json({
                    statusCode: 200,
                    message: 'email sent.',
                    data: contactUsData
                })

                console.log('200 email sent.')

            } else {
                res.json({
                    statusCode: 400,
                    message: 'please fill in the form.'
                })

                console.log('400 please fill in the form.')
            }
        } catch (error) {
            res.json({
                statusCode: 500,
                message: 'internal server error.',
                error
            })

            console.log('500 internal server error.');
        }
    }
}

module.exports = sendMail