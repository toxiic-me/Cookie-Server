const Users = require('../models/Users.js');

const doesUserExist = async (req, res) => {
    try {
        const { email, username } = req.body;

        let emailExist = await Users.findOne({ email });
        let usernameExist = await Users.findOne({ username });

        if (emailExist) {
            res.status(200).json({ message: 'Email already exists.' });
            console.log('email present');
        } else if (usernameExist) {
            res.status(200).json({ message: 'Username Already Taken' });
            console.log('name present');
        } else {
            res.status(200).json({ message: 'User is unique' })
            console.log('unique'); // Indicates that the user doesn't exist
        }
    } catch (error) {
        console.error('Server error:', error);
        throw new Error('Server Internal Error');
    }
};

module.exports = doesUserExist;
