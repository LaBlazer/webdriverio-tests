var chai = require('chai');
var expect = chai.expect;
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

const registerPage = require('../../../pages/register/register.page')
const takeScreenshot = require('../../../utils/screenshot')
const data = require('../../../resources/register/register')

describe('Registration page', function() {
  beforeEach(function (){
    browser.url('/register')
  })

  it('must create an account', function() {
    registerPage.fillForm(data.register_valid_credentials)

    takeScreenshot('./logs/screenshot/', 'register_valid_credentials.png')

    expect(browser.getTitle()).to.contain(data.register_valid_credentials.assertion)
  });

  it('must check for a valid username', function() {
    registerPage.fillForm(data.register_invalid_username_credentials)

    takeScreenshot('./logs/screenshot/', 'register_invalid_username_credentials.png')

    expect(browser.getTitle()).to.contain(data.register_invalid_username_credentials.assertion)
  });

  it('must check for a valid password', function() {
    registerPage.fillForm(data.register_invalid_password_credentials)

    takeScreenshot('./logs/screenshot/', 'register_invalid_password_credentials.png')

    expect(browser.getTitle()).to.contain(data.register_invalid_password_credentials.assertion)
  });

  it('must check for a valid email', function() {
    registerPage.fillForm(data.register_invalid_email_credentials)

    takeScreenshot('./logs/screenshot/', 'register_invalid_email_credentials.png')

    expect(browser.getTitle()).to.contain(data.register_invalid_email_credentials.assertion)
  });

  it('must check for a valid tos', function() {
    registerPage.fillForm(data.register_invalid_tos_credentials)

    takeScreenshot('./logs/screenshot/', 'register_invalid_tos_credentials.png')

    expect(browser.getTitle()).to.contain(data.register_invalid_tos_credentials.assertion)
  });

  it('must check for a valid captcha', function() {
    registerPage.fillForm(data.register_invalid_captcha_credentials)

    takeScreenshot('./logs/screenshot/', 'register_invalid_captcha_credentials.png')

    expect(browser.getTitle()).to.contain(data.register_invalid_captcha_credentials.assertion)
  });
});