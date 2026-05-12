class CartPage {
  constructor(page) {
    this.page = page;
    this.itemsEnCarrito = page.locator('[data-test="inventory-item-name"]');
    this.botonCheckout = page.locator('[data-test="checkout"]');
  }

  async obtenerNombresProductos() {
    return await this.itemsEnCarrito.allTextContents();
  }

  async clickCheckout() {
    await this.botonCheckout.click();
  }
}

module.exports = { CartPage };
