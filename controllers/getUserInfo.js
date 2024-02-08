const Users = require('../models/Users.js')

const getUserInfo = async (req, res) => {
    try {
        await Users.findOne({ _id: req.user.userId })
            .then(({ username, email, userImage }) => {
                console.log(email);
                res.status(200).json({
                    username,
                    email,
                    userImage
                })
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Internal Error" })
    }
}

module.exports = getUserInfo;