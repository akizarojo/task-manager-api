// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs javascript
const sgMail = require('@sendgrid/mail')
const { getMaxListeners } = require('../models/task')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'akizadyanrojo@gmail.com',
        subject: 'Thanks for joing in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'akizadyanrojo@gmail.com',
        subject: 'Goodbye',
        text: `Goodbye ${name}!,is their anything that we could done ,please let us know`
    })
}



module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}