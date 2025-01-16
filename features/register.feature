Feature: Funcionalidad Register
Como usuario, quiero ingresar a la aplicacion, crear una nueva cuenta
y visualizar el dashboard

Escenario1: Registro Exitoso
    Abro la Aplicacion 
    Presiono la opcion NO ACCOUNT YET? CREATE ONE
    Registro la sigte informacion
    Presiono el boton CREATE ACCOUNT
    Visualizo el Dashboard con el sms "Hello Word"

Escenario1: Registro Fallido 
    Abro la Aplicacion 
    Presiono la opcion NO ACCOUNT YET? CREATE ONE
    Registro la sigte informacion erronea
    Presiono el boton CREATE ACCOUNT
    Visualizo el Dashboard con el sms "Password do not match"
