// importing the models and required function
const Users = require('../models/Users.js')
const sendEmail = require('../functions/sendEmail.js')

const sendOtp = async (req, res) => {
    const { email, otp } = req.body;
    try {
        // if user exists, send forget pass otp
        let options = {
            to: email,
            subject: "!! Cookie Verfication Code !!",
            content: `<h3>Your code is: </h3> 
                <h1>${otp}</h1>`
        }
        await sendEmail(options)
            .then(() => {
                res.status(200).json({
                    message: "Code sent successfully",
                })
            })
            .catch(() => {
                res.status(500).json({
                    error: "Failed to send code"
                })
            })

    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

module.exports = sendOtp;
