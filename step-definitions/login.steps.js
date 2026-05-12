const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('el usuario está en la página de login', async function () {
  await this.loginPage.abrirPagina();
});

When('ingresa el usuario {string} y la contraseña {string}', async function (usuario, contrasena) {
  await this.loginPage.ingresarCredenciales(usuario, contrasena);
});

When('hace click en el botón Login', async function () {
  await this.loginPage.clickLogin();
});

Then('debe ver la página de inventario', async function () {
  await expect(this.page).toHaveURL(/inventory\.html/);
  const titulo = await this.inventoryPage.obtenerTituloApp();
  expect(titulo).toBe('Swag Labs');
});

Then('debe ver el mensaje de error {string}', async function (mensajeEsperado) {
  const mensajeActual = await this.loginPage.obtenerMensajeError();
  expect(mensajeActual).toContain(mensajeEsperado);
});
