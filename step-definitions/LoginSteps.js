const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('the application is launched', async () => {
    await driver.launchApp();
});

When('I enter valid credentials', async () => {
    await $('~username').setValue('valid_user');
    await $('~password').setValue('valid_password');
});

When('I enter invalid credentials', async () => {
    await $('~username').setValue('invalid_user');
    await $('~password').setValue('invalid_password');
});

When('I tap on the login button', async () => {
    await $('~loginButton').click();
});

Then('I should see the dashboard', async () => {
    await expect($('~dashboard')).toBeDisplayed();
});

Then('I should see an error message', async () => {
    await expect($('~errorMessage')).toBeDisplayed();
});
