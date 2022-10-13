# <center><font size="9">***"A.E. Store"***</font></center>
>## **Descripción del Repositorio**:
*Repositorio del Proyecto **"A.E. Store"**, para el curso de ***React***, Comisión **38.090** de **Coder House**.*

---

>## Índice de Contenido: 
### 1. [Descripción del Proyecto](#descripción-del-proyecto).
### 2. [Demo de Navegación](#demo-de-navegación).
### 3. [Dependencias Extra](#dependencias-extra-no-incluidas-en-el-curso).
### 4. [Historial de Modificaciones](#historial-de-modificaciones).
### 5. [Comandos Disponibles](#comandos-disponibles).

---

>## Descripción del Proyecto:
Tercer proyecto FrontEnd propio, realizado para implementar los conocimientos adquiridos en el curso de ***React*** de **Coder House**.
El objetivo del mismo es realizar un *e-commerce* con tematíca a elección, en mi caso elegí crear una tienda de libros. Son libros selecciónados para pequeños y grandes lectores, intentando mantener la simplicidad en su navegación, haciéndola accesible para los usuarios en las distintas plataformas disponibles e intentando incorporar los recursos aprendidos y los investigados por fuera del mismo para lograr un proyecto final completo, modular y escalable.

[`Volver al Índice ↑`](#descripción-del-repositorio)

---
>## Demo de Navegación:

<p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/ae-store-2022.appspot.com/o/demo_aestore.gif?alt=media&token=a7e8de31-1f7f-4f9a-9927-6dff9e37f2cb"></p>

[`Volver al Índice ↑`](#descripción-del-repositorio)

---

>## Dependencias Extra (no incluidas en el curso):
- **[Styled Components](https://styled-components.com/):** Utilizada para dar estilo mediante el uso *CSS* dentro del mismo componente, permitiendo la modularización de los mismos.
- **[React Spinners](https://mhnpd.github.io/react-loader-spinner/):** Utilizada para implementar animaciones de carga, con un formato acorde al diseño de la tienda.
- **[React Toastify](https://fkhadra.github.io/react-toastify/introduction/):** Utilizada para comunicar las alertas al usuario de manera poco intrusiva y estilizada.
- **[Material Icons](https://mui.com/material-ui/material-icons/):** Utilizados para dar ayudas visuales en los lugares necesarios ( Carrito de Compras, Boton Agregar al Carrito, Volver al Listado ).

[`Volver al Índice ↑`](#descripción-del-repositorio)

---
>## Historial de Modificaciones:

>### `13/10/2022`
- Se crearon dos nuevos componentes: *CartCheckOut* y *CartCheckOutForm*:
  - En *CartCheckOut* se crea la lógica para darle el cierre a la compra mediante una función **async** que se encarga de recopilar los datos del usuario cargados en *CartCheckOutForm* y los datos del Carrito desde *CartContext* y genera tanto una orden de compra que se envia a la base de datos de [Firebase](https://firebase.google.com/) y actualiza el stock descontando los artículos comprados.
>### `06/10/2022` 
- Configuración e implementación en el proyecto de una base de datos creada en [Firebase](https://firebase.google.com/).
  - Se creó el directorio *firebase* en */src/*, dentro del mismo se creó la **script** *firebase.js*, en el mismo se establecen las credenciales y se definen y exporta la base de datos.
  - En *ItemDetailContainer* e *ItemListContainer* se reemplazaron las funciones **async** que obtenian datos desde el *[mockup server](https://dashboard.heroku.com/apps/interactividades-server)* por otras que los obtienen desde Firebase](https://firebase.google.com/), utilizando las funciones especificas de la libreria. 

### `05/10/2022`
- En el módulo *Cart.js* se implementa un renderizado condicional, dependiendo de si el array *cart* está vació o no, en caso de estarlo (`cart.length === 0`), muestra un mensaje e ícono alertando que el carrito está vacío y un botón para volver al listado y seguir comprando. En caso de no estár vacío renderiza los ítems contenidos en el mismo mediante un **map** del *cart** para renderizarlo mediante el componente *CartItems.js* .
  - Creación del módulo *CartItems.js* en */src/components*, en el mismo se desectructura el **array** *cart* y se muestra el detalle de cada artículo en el mismo, y mediante la utlización del *CartContext* aplica las funciones *removeItem* para eliminar un ítem puntual del carrito y *clearCart* para vaciar el carrito.
- En el módulo *CartWidget* se utiliza una nueva función del *CartContext* ( *totalItems* ) para realizar un renderizado condicionado por el operador **`||`** para que en caso que el total de items en el carrito sea distinto de cero se muestre el total agregado al lado del ícono y en caso de ser **0** no muestre nada. 
- En el *CartContext* se crearon dós funciones adicionales:
  - *totalItems* se aplica un **reduce** al *cart*, donde itera la propiedad *qty* de cada producto y se la suma partiendo de **0**.
  - *operPrice* se aplica un **reduce** al *cart*, donde itera las propiedades *qty* y *price* de cada producto y las multiplica para calcular el costo de cada ítem del carrito y a su vez el total de los mismos.  

### `03/10/2022`
- Creación del archivo *CartContext.js* en */src/context/* en el mismo se definió el estado *cart* como un **array** vacío y las funciones:
  - *isInCart* itera el array *cart* para comprobar si ya existe el producto que se quiere agregar el carrito.
  - *addItem* ejecuta la función anterior y en caso positivo desestructura el **array** y sólo le suma al **objeto** la cantidad agregada. En caso negativo, agrega el **objeto** *producto* al **array** *cart*, agregandole una nueva propiedad *qty* donde figuran las unidades adquiridas del mismo.
  - *removeItem* itera el array *cart* y en base al **id** del producto que se desea eliminar, lo filtra y excluye del mismo.
  - *clearCart* define nuevamente el estado *cart* como un **array** vació.
- En *App* se encierran la *NavBar* y las *Routes* en el *CartProvider*, definido previamente en *CartContext*.
- En *ItemDetail* se modifica la función *onAdd* para que además de mostrar la **toast** con el producto agregado, cambiar *ItemCount* por el botón **Ir al Carrito**, ejecute la función del *CartContext* *addItem*.  
  
### `27/09/2022`
- En *ItemDetail*, mediante el uso de un operador ternario, capturo un evento *onClick* emitido desde *ItemCount* al botón "agregar al carrito" y reemplazo el módulo *ItemCount* por un botón **Ir al Carrito**.
- Extracción de los *Styled Components* para optimizar el tamaño de los módulos, los mismos ahora se encuentran en el directorio */src/styled/* y son importados en cada módulo que deben ser utilizados.
 
### `21/09/2022`
- Implementación de la estructura de navegación, permitida gracias a la importación de la librería *[React Router](https://reactrouter.com/en/main)*.
### `19/09/2022`
- Se reemplazó la lógica para obtener datos del servidor por funciones asincrónicas que utilizan **async** y **await** para resolver el **fetch** y el parseo de los datos obtenidos.

### `17/09/2022`
- Creación de los archivos *ItemDetailContainer.js* e *ItemDetail.js*, dentro del directorio *src/components*.
  - Dentro del componente *ItemDetailContainer*, se creo una función **fetch** para obtener los datos del producto (del cual se simula su selección), desde el *[mockup server](https://dashboard.heroku.com/apps/interactividades-server)* con un delay de 2.000 ms, El cual es pasado a *ItemDetail* como **prop**.
  - Dentro del componente *ItemDetail* se desestructura el objeto obtenido previamente y se desestructura y estila para mostrar los detalles del mismo, finalmente se intregra nuevamente el componente *ItemCount*.
  
### `12/09/2022`
- Dentro del componente *ItemListContainer.js* , mediante el uso de *useEffect* se ~~cita~~ crea  una función ~~*getData* (creada en *src/utils/getData.js*) para importar los productos del archivo *mockupProducts.json*, ubicado temporalmente en el directorio: */src/data/products.json*~~, **async** para obtener los datos del producto del cual se simula su selección, desde el *[mockup server](https://dashboard.heroku.com/apps/interactividades-server)*, con un delay seteado en 2.000 ms. que muestra un spinner importado desde la librería **[React Spinners](https://mhnpd.github.io/react-loader-spinner/)**, mientras se cargan los datos.
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

[`Volver al Índice ↑`](#descripción-del-repositorio)

---

>## Comandos Disponibles:

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

[`Volver al Índice ↑`](#descripción-del-repositorio)