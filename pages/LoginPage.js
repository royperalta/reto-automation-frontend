class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async abrirPagina() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async ingresarCredenciales(usuario, contrasena) {
    await this.usernameInput.fill(usuario);
    await this.passwordInput.fill(contrasena);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async obtenerMensajeError() {
    return await this.errorMessage.textContent();
  }
}

module.exports = { LoginPage };
