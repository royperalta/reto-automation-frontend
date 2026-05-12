# language: es
Característica: Login en SauceDemo
  Como un cliente de Sauce Demo
  Quiero poder iniciar sesión, agregar productos al carrito y completar una compra
  Para adquirir los productos que necesito

  @Caso_1
  Esquema del escenario: Validar el inicio de sesión con credenciales válidas
    Dado el usuario está en la página de login
    Cuando ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    Y hace click en el botón Login
    Entonces debe ver la página de inventario

  @Caso_2
  Esquema del escenario: Validar que el usuario no pueda iniciar sesión con credenciales inválidas
    Dado el usuario está en la página de login
    Cuando ingresa el usuario "usuario_invalido" y la contraseña "clave_incorrecta"
    Y hace click en el botón Login
    Entonces debe ver el mensaje de error "Epic sadface: Username and password do not match any user in this service"

  @Caso_3
  Esquema del escenario: validar que el usuario no pueda iniciar sesión con usuario bloqueado
    Dado el usuario está en la página de login
    Cuando ingresa el usuario "locked_out_user" y la contraseña "secret_sauce"
    Y hace click en el botón Login
    Entonces debe ver el mensaje de error "Epic sadface: Sorry, this user has been locked out."
