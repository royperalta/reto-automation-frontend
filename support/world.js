const {
  setWorldConstructor,
  Before,
  After,
  setDefaultTimeout
} = require('@cucumber/cucumber');

const { chromium } = require('playwright');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

setDefaultTimeout(60000);

class CustomWorld {
  constructor() {
    this.browser = null;
    this.page = null;
    this.loginPage = null;
    this.inventoryPage = null;
    this.cartPage = null;
    this.checkoutPage = null;
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  this.browser = await chromium.launch({
    headless: false
  });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  this.loginPage = new LoginPage(this.page);
  this.inventoryPage = new InventoryPage(this.page);
  this.cartPage = new CartPage(this.page);
  this.checkoutPage = new CheckoutPage(this.page);
});

After(async function () {
  await this.browser?.close();
});