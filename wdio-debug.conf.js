const conf = require('./wdio.conf').config

conf.debug = true
conf.execArgv = ['--inspect-brk=127.0.0.1:5859']

exports.config = conf
