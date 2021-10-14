const express = require('express');
const { validationUsername, 
        validationEmail, 
        validationPassword } = require('../middlewares/validations')

const userRoute = express.Router();

userRoute.post('/register', validationUsername, validationEmail, validationPassword, (req, res) => {
  return res.status(201).json({ message: 'user created' } );
})

userRoute.post('/login', validationUsername, validationEmail, validationPassword, (req, res) => {
  return res.status(201).json({ token: '86567349784e' } );
})

module.exports = userRoute;