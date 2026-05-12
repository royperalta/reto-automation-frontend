# language: es
Característica: Proceso de compra en SauceDemo
  Como cliente de SauceDemo
  Quiero agregar productos al carrito y completar el proceso de compra hasta la confirmación.
  Para adquirir los productos que necesito

  Antecedentes:
    Dado el usuario está en la página de login
    Cuando ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    Y hace click en el botón Login
    Entonces debe ver la página de inventario

  @Caso_1
  Esquema del escenario: Validar que el usuario puede agregar un producto al carrito desde la página de productos
    Cuando agrega el producto "Sauce Labs Backpack" al carrito
    Entonces el carrito debe mostrar "1" producto

  @Caso_2
  Esquema del escenario: Validar que el usuario puede ver los productos agregados en el carrito de compras
    Cuando agrega el producto "Sauce Labs Backpack" al carrito
    Y hace click en el ícono del carrito
    Entonces debe ver el producto "Sauce Labs Backpack" en el carrito

  @Caso_3
  Esquema del escenario: Validar que el usuario puede completar el proceso de compra hasta la confirmación
    Cuando agrega el producto "Sauce Labs Backpack" al carrito
    Y hace click en el ícono del carrito
    Y hace click en Checkout
    Y completa los datos con nombre "Roy", apellido "Peralta Barboza" y código postal "06002"
    Y hace click en Continue
    Y hace click en Finish
    Entonces debe ver el mensaje de confirmación "Thank you for your order!"
