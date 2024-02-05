// importing the models and required function
const Users = require('../models/Users.js');

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    console.log('Signup: ', email);

    try {

        // Create a new user
        const userCreated = await Users.create({
            username,
            email,
            password
        });

        // Generate a token for the user
        const token = await userCreated.generateToken();

        // Return the success response with token and userId
        return res.status(200).json({
            message: 'Account created successfully :)',
            token,
            userId: userCreated._id.toString()
        });

    } catch (error) {
        console.error('Error in signup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = signup;
