const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('Abro la Aplicacion', async () => {
    await driver.launchApp();
});

When('Coloco mi correo electronico y contraseña', async () => {
    await $('~username').setValue('diana.murillo@gmail.com');
    await $('~password').setValue('dimuri123');
});

When('Coloco mi correo electronico y contraseña erroneos', async () => {
    await $('~username').setValue('diana.murillo@gmail');
    await $('~password').setValue('dimuri23');
});

When('Presiono el boton de "Login"', async () => {
    await $('~loginButton').click();
});

Then('Visualizo el Dashboard con el sms "Hello Word"', async () => {
    await expect($('~dashboard')).toBeDisplayed();
});

Then('Visualizo el sms de error "Login Failed"', async () => {
    await expect($('~errorMessage')).toBeDisplayed();
});
