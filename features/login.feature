Feature: Funcionalidad Login
Como usuario, quiero ingresar a la aplicacion y visualizar el dashboard ingresando mi correo electronico y contraseña

Escenario1: Logueo Exitoso
    Abro la Aplicacion Material Login Example
    Coloco mi correo electronico y contraseña (correo:diana.murillo@gmail.com, pass: dimuri123)
    Presiono el boton de "Ingresar"
    Visualizo el Dashboard con el sms "Hello Word"

Escenario2: Logueo Fallido por credenciales incorrectas(formato erroneo)
    Abro la Aplicacion Material Login Example
    Coloco mi correo electronico y contraseña (correo:diana.murillo@gmail, pass: dimuri123)
    Presiono el boton de "Ingresar"
    Visualizo el sms de error ""