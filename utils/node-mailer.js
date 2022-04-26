const nodemailer = require('nodemailer')
const {emailTemplate} = require('./email-template')

exports.sendEmail = async (data, emailSubject) => {
    const transporter = nodemailer.createTransport({
        host: "srv99.niagahoster.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      if (emailSubject == '[BOND Jakarta] Reservation') {
        mailOptions = {
          from: process.env.EMAIL_ADDRESS,
          to: data.email,
          subject: `${emailSubject} - ${data.reservationId}`,
          html: emailTemplate.reservationEmailTemplate(data)
          // html: '<b>data</b>'
        };
      } if (emailSubject == '[BOND Jakarta] Contact Us') {
        mailOptions = {
          from: process.env.EMAIL_ADDRESS,
          to: data.email,
          subject: `${emailSubject} - ${data.contactUsId}`,
          html: emailTemplate.contactUsEmailTemplate(data)
        };
      }
      await transporter.sendMail(mailOptions)
}