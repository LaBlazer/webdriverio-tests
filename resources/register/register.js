const fakeData = require('../../utils/generate-data')

module.exports = {
  "register_valid_credentials": {
    "username": fakeData.fakeUsername(),
    "email": fakeData.fakeEmail(),
    "password": fakeData.fakePassword(),
    "tos": true,
    "solveCaptcha" : true, 
    "assertion": "Success"
  },

  "register_invalid_username_credentials": {
    "username": "Invalid{username}",
    "email": fakeData.fakeEmail(),
    "password": fakeData.fakePassword(),
    "tos": true,
    "solveCaptcha" : true, 
    "assertion": "Registration"
  },

  "register_invalid_password_credentials": {
    "username": fakeData.fakeUsername(),
    "email": fakeData.fakeEmail(),
    "password": "testpassword1",
    "tos": true,
    "solveCaptcha" : true, 
    "assertion": "Registration"
  },

  "register_invalid_email_credentials": {
    "username": fakeData.fakeUsername(),
    "email": "b@c@gmail.com",
    "password": fakeData.fakePassword(),
    "tos": true,
    "solveCaptcha" : true, 
    "assertion": "Registration"
  },

  "register_invalid_tos_credentials": {
    "username": fakeData.fakeUsername(),
    "email": fakeData.fakeEmail(),
    "password": fakeData.fakePassword(),
    "tos": false,
    "solveCaptcha" : true,
    "assertion": "Registration"
  },

  "register_invalid_captcha_credentials": {
    "username": fakeData.fakeUsername(),
    "email": fakeData.fakeEmail(),
    "password": fakeData.fakePassword(),
    "tos": true,
    "solveCaptcha" : false,
    "assertion": "Registration"
  },
}