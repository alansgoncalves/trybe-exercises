  const crypto = require('crypto');

  function generateToken() {
    return crypto.randomBytes(6).toString('hex')
  }
  const validationUsername = (req, res, next) => {
    const { username } = req.body;
    if (!username || username.length < 3) { 
      return res.status(400).json({ message: 'invalid data' })
    }
    next();
  };

  const validationEmail = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email || !emailRegex.test(email)) { 
      return res.status(400).json({ message: 'invalid data' })
    }
    next();
  };

  const validationPassword = (req, res, next) => {
    const { password } = req.body;
    const passwordRegex = /^[0-9]*$/;
    if (
        !passwordRegex.test(password) ||
        password.length < 3 ||
        password.length > 8) { 
      return res.status(400).json({ message: 'invalid data' })
    }
    next();
  };

  module.exports = {
    generateToken, 
    validationUsername,
    validationEmail,
    validationPassword,
  };