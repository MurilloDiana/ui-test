Pruebas de UI

Este proyecto contiene las pruebas de interfaz de usuario (UI) basadas en los requerimientos proporcionados. Las pruebas han sido implementadas utilizando WebdriverIO, Cucumber y Appium, y están configuradas para ejecutarse en un entorno automatizado.

Descripción de las Pruebas

Prueba 1: Registro de usuario exitoso

Objetivo: Validar el flujo de registro de usuario en la aplicación móvil.

Pasos:

Abrir la aplicación.

Navegar a la pantalla de registro.

Ingresar datos válidos (nombre, dirección, correo electrónico, móvil, contraseña, confirmar contraseña).

Confirmar el registro.

Validaciones:

El registro debe completarse con éxito y mostrar el dashboard principal.

Prueba 2: Registro de usuario fallido

Objetivo: Validar el flujo de registro de usuario en la aplicación móvil.

Pasos:

Abrir la aplicación.

Navegar a la pantalla de registro.

Ingresar datos válidos (nombre, dirección, correo electrónico, móvil, contraseña, confirmar contraseña), donde el campo confirmar contraseña sea erroneo

Confirmar el registro.

Validaciones:

El registro no debe completarse y se debe visualizar un mensaje de error.

Prueba 3: Inicio de sesión exitoso

Objetivo: Validar el flujo de inicio de sesión en la aplicación móvil.

Pasos:

Abrir la aplicación.

Navegar a la pantalla de inicio de sesión.

Ingresar credenciales válidas.

Presionar el boton LOGIN y visualizar el dashboard

Validaciones:

El usuario debe ser redirigido al panel principal después del inicio de sesión exitoso.

Prueba 4: Inicio de sesión fallido

Objetivo: Validar el flujo de inicio de sesión en la aplicación móvil.

Pasos:

Abrir la aplicación.

Navegar a la pantalla de inicio de sesión.

Ingresar credenciales incorrectas (correo electronico en un formato incorrecto).

Presionar el boton LOGIN y visualizar el mensaje de error

Validaciones:

El usuario debe mostrar un sms de error indicando LOGIN FAILED