class InventoryPage {
  constructor(page) {
    this.page = page;

    this.appLogo = page.locator('.app_logo');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  _selectorBotonAgregar(nombreProducto) {
    const id = nombreProducto.toLowerCase().replace(/ /g, '-');
    return `[data-test="add-to-cart-${id}"]`;
  }

  async agregarProductoAlCarrito(nombreProducto) {
    const selector = this._selectorBotonAgregar(nombreProducto);
    await this.page.locator(selector).click();
  }

  async obtenerCantidadCarrito() {
    return await this.cartBadge.textContent();
  }

  async irAlCarrito() {
    await this.cartLink.click();
  }

  async estaEnInventario() {
    return this.page.url().includes('/inventory.html');
  }

  async obtenerTituloApp() {
    return await this.appLogo.textContent();
  }
}

module.exports = { InventoryPage };
