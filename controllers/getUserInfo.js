const Users = require('../models/Users.js')

const getUserInfo = async (req, res) => {
    const { email } = req.body;
    try {
        await Users.findOne({ _id: req.user.userId })
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

module.exports = getUserInfo;