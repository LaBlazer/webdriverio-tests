const fs = require('fs');

function takeScreenshot(path, image) {

  fs.access(path, fs.F_OK, (err) => {
    if (err) {
      console.warn("File path does not exist, creating...")
      fs.mkdir(path, {recursive: true}, err => {})
    }
    // file exists
    browser.saveScreenshot(path + image)
  });
}

module.exports = takeScreenshot