const express = require('express');
const { generateToken, 
        validationUsername, 
        validationEmail, 
        validationPassword } = require('../middlewares/validations')

const userRoute = express.Router();

userRoute.post('/register', validationUsername, validationEmail, validationPassword, (req, res) => {
  return res.status(201).json({ message: 'user created' } );
})

userRoute.post('/login', validationUsername, validationEmail, validationPassword, (req, res) => {
  return res.status(201).json({ token: generateToken(12) } );
})

module.exports = userRoute;