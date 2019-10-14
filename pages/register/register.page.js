var dragAndDrop = require('html-dnd').codeForSelectors;

function registerElements() {
  return {
    username: function() { return $('#username') },
    email: function() { return $('#email') },
    password: function() { return $('#password') },
    passwordConfirm: function() { return $('#password_confirm') },
    tos: function() { return $('#accept_tos') },
    captchaSource: function() { return '#drag_img' },
    captchaDestination: function() { return '#drag_dest' },
    registerButton: function() { return $('//input[@value="Register"]') }
  }
}

function registerMethods() {
  const element = registerElements()

  return {
    setUsername: function(firstName) {
      element.username().clearValue()
      element.username().setValue(firstName)
    },

    setEmail: function(emailParam) {
      element.email().clearValue()
      element.email().setValue(emailParam)
    },

    setPassword: function(password) {
      element.password().clearValue()
      element.password().setValue(password)
    },

    setPasswordConfirm: function(password) {
      element.passwordConfirm().clearValue()
      element.passwordConfirm().setValue(password)
    },

    solveCaptcha: function() {
      browser.execute(dragAndDrop, element.captchaSource(), element.captchaDestination())
    },

    setTos: function(tos) {
      if(tos && !element.tos().isSelected())
        element.tos().click()
    },

    clickRegisterButton: function() {
      let btn = element.registerButton()
      btn.click()
    },
  }
}

function register() {
  const register = registerMethods()

  return {
    fillForm: function(registrationData) {
      register.setUsername(registrationData.username)
      register.setEmail(registrationData.email)
      register.setPassword(registrationData.password)
      register.setPasswordConfirm(registrationData.password)
      register.setTos(registrationData.tos)
      
      if(registrationData.solveCaptcha)
        register.solveCaptcha()
      
      register.clickRegisterButton()
      //browser.pause(100)
    },
  }
}

module.exports = register()