const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('Abro la Aplicacion ', async () => {
    await driver.launchApp();
});

When('Presiono la opcion NO ACCOUNT YET? CREATE ONE', async () => {
    await $('~labelregisterButton').click();
});

When('Registro la sigte informacion', async () => {
    await $('~name').setValue('diana');
    await $('~address').setValue('av. siempre viva');
    await $('~email').setValue('diana@prueba.com ');
    await $('~mobile_number').setValue('71689618');
    await $('~password').setValue('dimuri123');
    await $('~confirm_password').setValue('dimuri123');
});

When('Registro la sigte informacion erronea', async () => {
    await $('~name').setValue('diana');
    await $('~address').setValue('av. siempre viva');
    await $('~email').setValue('diana@prueba.com ');
    await $('~mobile_number').setValue('71689618');
    await $('~password').setValue('dimuri123');
    await $('~confirm_password').setValue('dimuri323');
});

When('Presiono el boton CREATE ACCOUNT', async () => {
    await $('~registerButton').click();
});

Then('Visualizo el Dashboard con el sms "Hello Word"', async () => {
    await expect($('~dashboard')).toBeDisplayed();
});

Then('Visualizo el Dashboard con el sms "Password do not match"', async () => {
    await expect($('~errorMessage')).toBeDisplayed();
});
