Aquí tienes el **README actualizado y modernizado** para tu proyecto, con correcciones de estilo, markdown y algunos ajustes a las versiones modernas de Angular y Angular CLI:

````markdown
# 🛍️ Angular Shop

Proyecto de ejemplo que muestra la implementación de una aplicación de **comercio electrónico elegante, responsiva y compatible con navegadores modernos**, construida con **Angular**.

---

## ✨ Características

- Ordenar productos por nombre, precio (ascendente y descendente).
- Búsqueda instantánea por nombre del producto.
- Filtrar productos por categorías, rango de precios, disponibilidad y más filtros personalizados.
- Agregar productos al carrito de compras.
- Ver detalles y administrar el carrito de compras.
- Cargar tus propios datos a través de la aplicación:
  - Verás un botón rojo con un ícono de **enlace**, haz clic en él y pega la URL.
  - El archivo **JSON** debe seguir un formato específico ([ejemplo aquí](http://carlosroso.com/angular2-shop-json/)).
  - ⚠️ **Importante:** asegúrate de configurar correctamente el encabezado `Access-Control-Allow-Methods` en tu respuesta HTTP JSON.
- **UI atractiva** con animaciones que mejoran la experiencia de usuario (UX).

---

## 🚀 Instalación

Clona el repositorio:

```bash
git clone https://github.com/jlozoya/angular-shop
````

Instala las dependencias dentro de la carpeta del proyecto:

```bash
cd angular-shop
npm install
```

Asegúrate de tener instalada la última versión de Angular CLI:

```bash
npm install -g @angular/cli
```

Inicia la aplicación en modo desarrollo:

```bash
ng serve
```

Abre tu navegador en [http://localhost:4200](http://localhost:4200).

---

## 🤝 Contribuyendo

Este proyecto se generó originalmente con [Angular CLI](https://github.com/angular/angular-cli) **v1.0.0-beta.15**.
Se recomienda actualizar a la versión más reciente de Angular para aprovechar nuevas funcionalidades y optimizaciones.

---

## 📖 Scripts disponibles

### ▶️ Servidor de desarrollo

Ejecuta:

```bash
ng serve
```

Esto levantará un servidor en [http://localhost:4200](http://localhost:4200).
La aplicación se recargará automáticamente si cambias archivos fuente.

### 🏗️ Generar código

```bash
ng generate component component-name
```

También puedes usar:

* `ng generate directive`
* `ng generate pipe`
* `ng generate service`
* `ng generate class`

### 📦 Construcción de la app

```bash
ng build
```

Los artefactos se guardarán en la carpeta `dist/`.
Usa la opción `--configuration production` (o `--prod` en versiones anteriores) para un build optimizado.

### 🧪 Pruebas unitarias

```bash
ng test
```

Ejecuta las pruebas unitarias con [Karma](https://karma-runner.github.io).

### 🔍 Pruebas end-to-end (E2E)

```bash
ng e2e
```

Ejecuta las pruebas E2E con [Protractor](http://www.protractortest.org/).
Antes de correrlas, asegúrate de tener la aplicación levantada con `ng serve`.

---

## 📌 Notas

* Compatibilidad con **Angular moderno** (reemplazar dependencias obsoletas según la versión que uses).
* Si quieres usarlo como **proyecto de aprendizaje**, es ideal para explorar conceptos de Angular como:

  * Componentes
  * Data binding
  * Formularios
  * Servicios
  * Rutas
  * Pipes personalizados
