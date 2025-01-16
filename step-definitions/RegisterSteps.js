const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('the application is launched', async () => {
    await driver.launchApp();
});

When('I enter valid credentials', async () => {
    await $('~name').setValue('diana');
    await $('~address').setValue('av. siempre viva');
    await $('~email').setValue('diana@prueba.com ');
    await $('~mobile_number').setValue('71689618');
    await $('~password').setValue('dimuri123');
    await $('~confirm_password').setValue('dimuri123');
});

When('I enter invalid credentials', async () => {
    await $('~name').setValue('diana');
    await $('~address').setValue('av. siempre viva');
    await $('~email').setValue('diana@prueba.com ');
    await $('~mobile_number').setValue('71689618');
    await $('~password').setValue('dimuri123');
    await $('~confirm_password').setValue('dimuri323');
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
