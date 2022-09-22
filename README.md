# *<h2 align=center>**"A.E. Store"**</h2>*

## **Descripción del Repositorio**:
*Repositorio del Proyecto **"A.E. Store"**, para el curso de ***React***, Comisión **38.090** de **Coder House**.*

---

## Contenido: 
### 1. [Descripción del Proyecto](#descripción-del-proyecto).
### 2. [Demo de Navegación](#demo-de-navegación).
### 3. [Dependencias Extra](#dependencias-extra-no-incluidas-en-el-curso).
### 4. [Historial de Modificaciones](#historial-de-modificaciones).
### 5. [Comandos Disponibles](#comandos-disponibles).

---

## Descripción del Proyecto:
Tercer proyecto FrontEnd propio, realizado para implementar los conocimientos adquiridos en el curso de ***React*** de **Coder House**.
El objetivo del mismo es realizar un *e-commerce* con tematíca a elección, en mi caso elegí crear una tienda de libros. Son libros selecciónados para pequeños y grandes lectores, intentando mantener la simplicidad en su navegación, haciéndola accesible para los usuarios en las distintas plataformas disponibles e intentando incorporar los recursos aprendidos y los investigados por fuera del mismo para lograr un proyecto final completo, modular y escalable.

[`Volver Arriba`](#h2-aligncenterae-storeh2)

---
## Demo de Navegación:

[![Navegación AE Store](https://img.youtube.com/vi/makOiXRWWrQ/0.jpg)](https://youtu.be/makOiXRWWrQ)

[`Volver Arriba`](#h2-aligncenterae-storeh2)

---

## Dependencias Extra (no incluidas en el curso):
- **[Styled Components](https://styled-components.com/):** Utilizada para dar estilo mediante el uso *CSS* dentro del mismo componente, permitiendo la modularización de los mismos.
- **[React Spinners](https://mhnpd.github.io/react-loader-spinner/):** Utilizada para implementar animaciones de carga, con un formato acorde al diseño de la tienda.
- **[React Toastify](https://fkhadra.github.io/react-toastify/introduction/):** Utilizada para comunicar las alertas al usuario de manera poco intrusiva y estilizada.
- **[Material Icons](https://mui.com/material-ui/material-icons/):** Utilizados para dar ayudas visuales en los lugares necesarios ( Carrito de Compras, Boton Agregar al Carrito, Volver al Listado ).

[`Volver Arriba`](#h2-aligncenterae-storeh2)

---
## Historial de Modificaciones:
### `21/09/2022`
- Implementación de la estructura de navegación, permitida gracias a la importación de la librería *[React Router](https://reactrouter.com/en/main)*.
### `19/09/2022`
- Se reemplazó la lógica para obtener datos del servidor por funciones asincrónicas que utilizan **async** y **await** para resolver el **fetch** y el parseo de los datos obtenidos.

### `17/09/2022`
- Creación de los archivos *ItemDetailContainer.js* e *ItemDetail.js*, dentro del directorio *src/components*.
  - Dentro del componente *ItemDetailContainer*, se creo una función **fetch** para obtener los datos del producto (del cual se simula su selección), desde el *[mockup server](https://dashboard.heroku.com/apps/interactividades-server)* con un delay de 2.000 ms, El cual es pasado a *ItemDetail* como **prop**.
  - Dentro del componente *ItemDetail* se desestructura el objeto obtenido previamente y se desestructura y estila para mostrar los detalles del mismo, finalmente se intregra nuevamente el componente *ItemCount*.
  
### `12/09/2022`
- Dentro del componente *ItemListContainer.js* , mediante el uso de *useEffect* se ~~cita~~ crea  una función ~~*getData* (creada en *src/utils/getData.js*) para importar los productos del archivo *mockupProducts.json*, ubicado temporalmente en el directorio: */src/data/products.json*~~, **fetch** para obtener los datos del producto del cual se simula su selección, desde el *[mockup server](https://dashboard.heroku.com/apps/interactividades-server)*, con un delay seteado en 2.000 ms. que muestra un spinner importado desde la librería **[React Spinners](https://mhnpd.github.io/react-loader-spinner/)**, mientras se cargan los datos.
- Creación de los archivos *Item.js* e *ItemList.js*, dentro del directorio *src/components*.
  - En *ItemList.js* se realizó la desestructuración del array importado en *ItemListContainer.js* y generación de la key mediante la fusión de los campos título y id ( Créditos a la tutora Pilar Figueroa por el tip ), para luego ser pasados a *Item.js* como **prop**.
  - En *Item.js* se estructuró y estilaron los datos de los productos para su correcta renderización en pantalla.

### `07/09/2022`
- Creación del archivo *ItemCount.js*, dentro del directorio *src/components*.
  - Importación del *componente* dentro de *ItemListContainer.js*, pasandole las *propiedades* **stock**, **init** y la *función* **onAdd**.
  ~~- Creación de los archivos *ItemCount.css* y *NavBar.css* dentro del durectorio *src/components*.~~ 

### `04/09/2022`
- Creación del archivo *CartWidget.js*, dentro del directorio *src/components*.
  - Importación del *componente* dentro en *NavBar.js*.
- Creación del archivo *ItemListContainer.js*, dentro del directorio *src/components*.
  - Importación del *componente* dentro de *App.js*, pasandole la *propiedad* **greeting**.

#### `02/09/2022`
- Creación del archivo ***NavBar.js***, dentro de la carpeta ***/src/components***
    - Se creó una barra de navegación simple, ~~implementando la librería **[Material UI](https://mui.com/)**, personalizando el contenido~~.
    - Se creó el archivo **logo.png** dentro del directorio ***/src/assets***.
  
#### `25/08/2022`
- Creación del repositorio;
    - Creación de la aplicación mediante el comando **[`npx create-react-app`](https://es.reactjs.org/docs/create-a-new-react-app.html#create-react-app)**.

[`Volver Arriba`](#h2-aligncenterae-storeh2)

---

## Comandos Disponibles:

En el directorio raíz del proyecto ejecutar:

### `npm install`

Para instalar los módulos necesarios para correr la aplicación en modo desarrollo.
### `npm start`

Para correr la aplicacion en modo desarrollo.\
Abrir la url [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador.

### `npm test`

Para testear la aplicación de manera interactiva.\
Consultar la sección [ejecutando tests](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

### `npm run build`

Compila la aplicación para producción en el subdirecorio: `build`.\

Para más información consultar la [documentación](https://es.reactjs.org/docs/getting-started.html) de React.

[`Volver Arriba`](#h2-aligncenterae-storeh2)