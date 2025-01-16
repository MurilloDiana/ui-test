const { join } = require('path');

exports.config = {
   
    runner: 'local',

    specs: [
        './features/**/*.feature'
    ],

    
    capabilities: [{
        platformName: 'Android',               
        deviceName: 'bcf5d9f20121',          
        app:__dirname + './../app/LoginExample.apk',
        automationName: 'UiAutomator2',       
        noReset: true                         
    }],


    logLevel: 'info',                         
    framework: 'cucumber',                    
    cucumberOpts: {
        require: ['./step-definitions/**/*.js'], 
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 100000,                       
        ignoreUndefinedDefinitions: false
    },


    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      }]],
      


    services: ['appium'],
    appium: {
        command: 'appium',                    
        args: {
            address: 'localhost',             
            port: 4723                       
        }
    },


    onPrepare: function (config, capabilities) {
        console.log('Pruebas iniciadas...');
    },
    onComplete: function (exitCode, config, capabilities, results) {
        console.log('Pruebas completadas.');
    }
};
