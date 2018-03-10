# Angular Shop

Este es un proyecto de ejemplo para mostrar una implementación de una aplicación de comercio / comercio electrónico elegante, sensible, compatible con cross browser (IE11) hecha en Angular.

Autor original: [carloso1222](https://github.com/caroso1222/angular2-shop)

## Caracteristicas
* Ordenar productos por nombre, precio (asc) y precio (desc)
* Búsqueda instantánea por nombre del producto
* Filtre productos por categorías, rango de precios, disponibilidad y más filtros personalizados.
* Agregar productos al carrito de compras
* Ver detalles y administrar el carrito de compras
* También puedes cargar tus propios datos a través de la aplicación. Verá un botón rojo con un ícono de * enlace *, haga clic en él y pegue la URL. El archivo JSON debe seguir un formato específico. [ver ejemplo aquí] (http://carlosroso.com/angular2-shop-json/). ** IMPORTANTE: ** Asegúrese de establecer el encabezado apropiado de `Access-Control-Allow-Methods` en su respuesta HTTP JSON.
* **Interfaz de usuario bastante atractiva y algunas animaciones de fantasía para mejorar UX**

## Instalación

Clona el proyecto
```bash
git clone https://github.com/caroso1222/angular2-shop
```

Instalar dependencias npm dentro de la carpeta del proyecto
```bash
cd angular-shop
npm install
```

Asegúrate de tener `angular-cli` instalado. Trataré de mantener este proyecto actualizado con la última versión `angular-cli`.
```bash
npm install -g angular-cli
```

Comience la aplicación
```bash
ng serve
```

Ahora abra una nueva pestaña en **localhost:4200**.

## Contribuyendo

Este proyecto fue generado con [angular-cli](https://github.com/angular/angular-cli) versión 1.0.0-beta.15.

### Servidor de desarrollo
Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200/`. La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos fuente.

### Andamio de código

Ejecute `ng generate component component-name` para generar un nuevo componente. También puede usar `ng generate directive/pipe/service/class`.

### Construir

Ejecuta `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`. Use el indicador `-prod` para una compilación de producción.

### Ejecución de pruebas unitarias

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

### Ejecución de pruebas de extremo a extremo

Ejecute `ng e2e` para ejecutar las pruebas de extremo a extremo a través de [Transportador] (http://www.protractortest.org/).
Antes de ejecutar las pruebas, asegúrese de que está publicando la aplicación mediante `ng serve`.
