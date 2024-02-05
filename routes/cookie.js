// defining the client via express routers
const express = require('express');
const cookie = express.Router();

// importing the controllers
const sendOtp = require('../controllers/sendOtp.js');
const signup = require('../controllers/signup.js');
const login = require('../controllers/login.js');
const setImage = require('../controllers/setImage.js');
const getImage = require('../controllers/getImage.js');
const changePassword = require('../controllers/changePassword.js')
const updateProfile = require('../controllers/updateProfile.js')
const getUser = require('../controllers/getUser.js')
const getUserInfo = require('../controllers/getUserInfo.js')
const doesUserExist = require('../controllers/doesUserExist.js')

// importing the middlewares
const authenticateToken = require('../middlewares/authenticateToken.js');
const upload = require('../middlewares/userImageMulter.js');

// setting up the routes
cookie
    .post('/doesUserExist', doesUserExist)
    .post('/sendOtp', sendOtp)
    .post('/signup', signup)
    .post('/login', login)
    .post('/changePassword', changePassword)
    .post('/setImage', authenticateToken, upload.single('image'), setImage)
    .post("/getImage", authenticateToken, getImage)
    .post('/updateProfile', authenticateToken, updateProfile)
    .post('/getUser', authenticateToken, getUser)
    .post('/getUserInfo', authenticateToken, getUserInfo)



module.exports = cookie;
