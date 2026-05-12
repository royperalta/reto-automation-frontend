const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('agrega el producto {string} al carrito', async function (nombreProducto) {
  await this.inventoryPage.agregarProductoAlCarrito(nombreProducto);
});

Then('el carrito debe mostrar {string} producto', async function (cantidadEsperada) {
  const cantidad = await this.inventoryPage.obtenerCantidadCarrito();
  expect(cantidad).toBe(cantidadEsperada);
});

When('hace click en el ícono del carrito', async function () {
  await this.inventoryPage.irAlCarrito();
});

Then('debe ver el producto {string} en el carrito', async function (nombreProducto) {
  const productos = await this.cartPage.obtenerNombresProductos();
  expect(productos).toContain(nombreProducto);
});

When('hace click en Checkout', async function () {
  await this.cartPage.clickCheckout();
});

When('completa los datos con nombre {string}, apellido {string} y código postal {string}',
  async function (nombre, apellido, codigoPostal) {
    await this.checkoutPage.completarDatosPersonales(nombre, apellido, codigoPostal);
  }
);

When('hace click en Continue', async function () {
  await this.checkoutPage.clickContinue();
});

When('hace click en Finish', async function () {
  await this.checkoutPage.clickFinish();
});

Then('debe ver el mensaje de confirmación {string}', async function (mensajeEsperado) {
  const mensaje = await this.checkoutPage.obtenerMensajeConfirmacion();
  expect(mensaje).toContain(mensajeEsperado);
});
