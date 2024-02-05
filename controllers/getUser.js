const Users = require('../models/Users.js')

const getUser = async (req, res) => {
    const { email } = req.body;
    try {
        await Users.findOne({ email })
            .then(({ name, email, phone, userImage }) => {
                res.status(200).json({
                    name,
                    email,
                    phone,
                    userImage
                })
            })
    } catch (error) {
        res.status(500).json({ error: "Server Internal Error" })
    }
}

module.exports = getUser;