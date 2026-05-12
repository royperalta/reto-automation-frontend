# SauceDemo Automation FrontEnd 🧪

Proyecto de automatización de pruebas FrontEnd para [SauceDemo](https://www.saucedemo.com/) usando **Playwright**, **Cucumber** y el patrón **Page Object Model**.

![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-1.44-2EAD33?logo=playwright&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-23D96C?logo=cucumber&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

---

## 📁 Estructura del proyecto

```
automation-frontEnd/
│
├── features/                # Escenarios en Gherkin
│   ├── login.feature
│   └── compra.feature
├── pages/                   # Page Objects (POM)
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── step-definitions/        # Implementación de los pasos
│   ├── login.steps.js
│   └── compra.steps.js
├── support/
│   └── world.js             # Configuración del navegador
├── reports/                 # Reportes HTML generados
│
├── cucumber.js
├── package.json
└── README.md
```

---

## 🚀 Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/royperalta/reto-automation-frontend.git
cd automation-frontEnd

# 2. Instalar dependencias
npm install

# 3. Instalar el navegador
npx playwright install chromium
```

---

## ▶️ Ejecutar pruebas

```bash
# Correr todos los escenarios
npm test

# Correr y generar reporte HTML
npm run test:report
```

> El reporte se guarda en `reports/report.html`

---

## ✅ Escenarios automatizados

### Login (`features/login.feature`)

| Escenario | Usuario | Resultado esperado |
|---|---|---|
| Login correcto | `standard_user` | Redirige al inventario |
| Usuario bloqueado | `locked_out_user` | Muestra mensaje de error |
| Credenciales inválidas | `usuario_invalido` | Muestra mensaje de error |

### Compra (`features/compra.feature`)

| Escenario | Descripción |
|---|---|
| Agregar al carrito | Agrega un producto y verifica el badge |
| Validar carrito | Verifica que el producto aparece en el carrito |
| Flujo completo | Login → Carrito → Checkout → Confirmación |

---

## 🏗️ Patrón Page Object Model

Cada página tiene su propia clase que encapsula sus elementos y acciones:

| Page Object | Página |
|---|---|
| `LoginPage` | Formulario de login y mensajes de error |
| `InventoryPage` | Lista de productos y carrito |
| `CartPage` | Productos agregados y botón Checkout |
| `CheckoutPage` | Datos de envío y confirmación de compra |

---

## 🔑 Usuarios de prueba

| Usuario | Password | Comportamiento |
|---|---|---|
| `standard_user` | `secret_sauce` | Acceso normal |
| `locked_out_user` | `secret_sauce` | Bloqueado — no puede ingresar |

---

## 📝 Consideraciones

- Se usan atributos `data-test` como selectores porque son más estables ante cambios de estilos.
- Cada escenario abre y cierra su propio navegador, garantizando aislamiento entre tests.
- Los feature files están escritos en español para que cualquier miembro del equipo pueda entenderlos.
- Para ver la ejecución en pantalla, cambiar `headless: true` → `headless: false` en `support/world.js`.