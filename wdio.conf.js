const takeScreenshot = require('./utils/screenshot')
/*
require('dotenv').config()
const reportportal = require('wdio-reportportal-reporter');
const RpService = require("wdio-reportportal-service");

const conf = JSON.parse(require('fs').readFileSync('reportportal.config.json'));
conf.reportPortalClientConfig.token = process.env.RP_USERUUID
conf.reportPortalClientConfig.endpoint = process.env.RP_ENDPOINT
conf.reportPortalClientConfig.project = process.env.RP_PROJECT
*/
exports.config = {
	runner: 'local',
	path: '/',
	specs: [
		'./test/specs/**/*.js'
	],
	maxInstances: 10,
	capabilities: [{
		maxInstances: 5,
		browserName: 'chrome',
		"goog:chromeOptions": {
			args: ['--headless'],
			w3c: true
		}
	}],
	logLevel: 'info',
	bail: 0,
	baseUrl: 'http://localhost/',
	waitforTimeout: 10000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 3,
	services: ['chromedriver'],
	framework: 'mocha',
	// services: [[RpService, {}]],
	// reporters: [[reportportal, conf]],
	reporters: ['spec', ['allure', {
		outputDir: './logs/results/',
		disableWebdriverStepsReporting: true,
		disableWebdriverScreenshotsReporting: false,
	}]],
	mochaOpts: {
		ui: 'bdd',
		timeout: 60000
	},

	afterTest(test) {
		if (test.passed === false) {
			takeScreenshot('./logs/screenshot/', 'screenshot_fail.png')
		}
	}
}
