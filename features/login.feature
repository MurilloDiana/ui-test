Feature: Funcionalidad Login
Como usuario, quiero ingresar a la aplicacion y visualizar el dashboard ingresando mi correo electronico y contraseña

Escenario1: Logueo Exitoso
    Abro la Aplicacion 
    Coloco mi correo electronico y contraseña 
    Presiono el boton de "Login"
    Visualizo el Dashboard con el sms "Hello Word"

Escenario2: Logueo Fallido por credenciales incorrectas
    Abro la Aplicacion 
    Coloco mi correo electronico y contraseña erroneos
    Presiono el boton de "Login"
    Visualizo el sms de error "Login Failed"