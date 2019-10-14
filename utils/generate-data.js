const faker = require('faker');

function fakeFirstName() {
  return faker.name.firstName()
}

function fakeLastName() {
  return faker.name.lastName()
}

function fakeUsername() {
  return faker.internet.userName(faker.random.word(), fakeFirstName())
}

function fakeEmail() {
  return faker.internet.email();
}

function fakePassword() {
    return faker.internet.password(11, false, undefined, "pQ2")
}

module.exports = {
  fakeUsername,
  fakeFirstName,
  fakeLastName,
  fakeEmail,
  fakePassword
}