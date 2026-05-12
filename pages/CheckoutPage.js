class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Paso 1 - Datos personales
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.botonContinue = page.locator('[data-test="continue"]');

    // Paso 2 - Resumen y confirmación
    this.botonFinish = page.locator('[data-test="finish"]');
    this.mensajeConfirmacion = page.locator('[data-test="complete-header"]');
  }

  async completarDatosPersonales(nombre, apellido, codigoPostal) {
    await this.firstNameInput.fill(nombre);
    await this.lastNameInput.fill(apellido);
    await this.postalCodeInput.fill(codigoPostal);
  }

  async clickContinue() {
    await this.botonContinue.click();
  }

  async clickFinish() {
    await this.botonFinish.click();
  }

  async obtenerMensajeConfirmacion() {
    return await this.mensajeConfirmacion.textContent();
  }
}

module.exports = { CheckoutPage };
