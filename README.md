# :infinity: KoNeCTa
![Grupo2](./img/K0N3CT4.png)

## :paperclip: Table of Content
- [KoNeCTa-Grupo2](#konecta)
- [Table of Content](#table-of-content)
- [Description](#memo-pencil-description) 
- [In Development](#hammer_and_wrench-in-development)
- [Built Using](#dart-built-using)
- [Installing](#floppy_disk-installing)
- [Available Scripts](#gear-available-scripts)
- [Contributors](#contributors)
- [Learn More]()

## :memo::pencil: Description
El proyecto surge a partir de una consigna: ¿Cómo relacionar a los adolescentes y la cultura? Esto nos ha llevado a pensar diferentes formas de acercar a los adolescentes, con sus necesidades y restricciones, a la cultura.

Es por esto que decidimos crear una applicación especifica para que los adolescentes encuentren aquello que les gusta, que sea práctica y sencilla, y que brinde una solución a un problema que trae de cabeza a todos los padres y educadores.

El proyecto reunirá información de eventos culturales gratuitos del "underground" (descripción, tipo de evento, horario y lugar). Estos eventos se muestran en dos formatos, un listado con todos los detalles y también en un mapa. Tanto el listado como el mapa, permiten a los usuarios filtrar el contenido para poder encontrar de manera rápida y sencilla el evento que se ajuste a sus necesidades. Estos filtros pueden ser personalizados a la hora de crear un usuario al completar los campos de intereses.

A su vez, los usuarios pueden interactuar entre ellos, ver los eventos a los que asistirán sus amigos y pueden desbloquear recompenzas por participar en la comunidad comentando y calificando eventos a los que han asistido.

## :hammer_and_wrench: In Development
La aplicación aún se encuentra en su fase de desarrollo. 
Funcionalidades pendientes de agregar:
- Asistencia a eventos.
- Interacción entre usuarios.
- Mapa funcional.
- Sistema de recompensas (Tokens).

## :dart: Built Using
Las tecnologias utilizadas:
- [ReactJs](https://create-react-app.dev/) - Web Framework
- CSS
- [ReactBootstrap](https://react-bootstrap.netlify.app/) - Rebuilt for React
- [React-router-dom](https://reactrouter.com/en/main) - Client side Routing

## :floppy_disk: Installing
Para crear una app en React:
```
create-react-app my-app
```
Anteriormente debes tener instalado [Node.js](https://nodejs.org/en/download)
Para instalar React Bootstrap:
```
npm install react-bootstrap bootstrap
```
Para instalar React Router Dom
```
npm i react-router-dom
```
## :gear: Available Scripts
### `npm start`
Para iniciar la app:
```
npm start
```
Ejecuta la aplicación en modo de desarrollo.
Abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se recargará cuando realice cambios.
También es posible que vea errores de pelusa en la consola.

### `npm run build`
Para asegurar que el código esté optimizado y listo para su uso en producción:
```
npm run build
```
Crea la aplicación para producción en la carpeta `build`.
Incluye correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación está minimizada y los nombres de archivos incluyen los hashes.
¡Su aplicación está lista para ser implementada!

## :checkered_flag: Contributors
- Ignacio Albiol
- Eugenia Cames
- Ingrid Barrachina
- Anthony Torres

## :dna: Output
Se ha utilizado Atomic Design
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
    ├── img
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── components
        ├── css
        ├── AboutMe.js
        ├── ButtonRow.js
        ├── CardContainer.js
        ├── Carrousel.js
        ├── Event.js
        ├── EventForm.js
        ├── EventList.js
        ├── Filter.js
        ├── Footer.js
        ├── Hobbies.js
        ├── K0N3CT4.js
        ├── Logo.js
        ├── Map.js
        ├── Navbar.js
        ├── ProfileInfo.js
        ├── RegisterForm.js
        ├── SigInForm.js
    ├── pages
        ├── AboutUsPage.js
        ├── CreateEventPage.js
        ├── EventsPage.js
        ├── HomePage.js
        ├── LoginPage.js
        ├── ProfilePage.js
        ├── RegisterPage.js
    ├── routing
        ├── Routing.js
    ├── services
        ├── DataService.js
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js

## :book::open_book: Learn More

Puede obtener más información en la [documentación de la aplicación Create React](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulte la [documentación de React](https://create-react-app.dev/).

