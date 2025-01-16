Feature: Funcionalidad Register
Como usuario, quiero ingresar a la aplicacion, crear una nueva cuenta
y visualizar el dashboard

Escenario1: Registro Exitoso
    Abro la Aplicacion Material Login Example
    Presiono la opcion NO ACCOUNT YET? CREATE ONE
    Registro la sigte informacion:
        Name: diana
        Address: av. siempre viva
        Email: diana@prueba.com 
        Mobile Number: 71689618
        Password: dimuri321
        Re.enter Password: dimuri321 
    Visualizo el Dashboard con el sms "Hello Word"

Escenario1: Registro Fallido (contraseña no iguales)
    Abro la Aplicacion Material Login Example
    Presiono la opcion NO ACCOUNT YET? CREATE ONE
    Registro la sigte informacion:
        Name: diana
        Address: av. siempre viva
        Email: diana@prueba.com 
        Mobile Number: 71689618
        Password: dimuri321
        Re.enter Password: dimuri456 
    Visualizo el Dashboard con el sms "Hello Word"
