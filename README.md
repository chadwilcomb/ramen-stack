#:ramen: RAMEN stack
**R**eact + **A**mpersand + **M**ongoDB + **E**xpress + **N**ode

The RAMEN stack is a sample project/scaffolding of a fully decoupled client-server application. The server-side RESTful web API is built on Node, Express and MongoDB/Mongoose. It features basic authentication and full CRUD functionality for our example use case (a beer inventory, a la the [Beer Locker](http://scottksmith.com/blog/2014/05/02/building-restful-apis-with-node/) tutorial series by [Scott Smith](http://scottksmith.com/)). The web client is a completely static native web application (or SPA) , designed to be deployed on any "dumb" web server or CDN (based on the [Human Javascript](http://learn.humanjavascript.com/react-ampersand) video series by [Henrik Joreteg](https://twitter.com/henrikjoreteg)). This example is meant to be a starting point for creating your own RESTful API and/or static web client app. They could easily be split into separate projects but do share some npm modules.

### Purpose
Create a sample application to provide a framework for creating a web API in Node/Express/MongoDB with a corresponding SPA static client. These two applications could potentially be installed on separate servers with the web client only requiring a CDN type server to host the static HTML, CSS, JS files.

### Mentions
This stack is the product of two excellent tutorials.

The [Human Javascript](http://learn.humanjavascript.com/react-ampersand) video series by [Henrik Joreteg](https://twitter.com/henrikjoreteg) is responsible for the client side (SPA or Native Web App) architecture. It is an excellent tutorial and is well worth the purchase price.

The [Beer Locker](http://scottksmith.com/blog/2014/05/02/building-restful-apis-with-node/) tutorial series by [Scott Smith](http://scottksmith.com/) provided the foundation for the server side web API. It is also an excellent tutorial that provides an easy to follow intro to NodeJS, Express, MongoDB/Mongoose and Passport security.  

### Dependencies
The RAMEN stack is based primarily on the following libraries/frameworks
- [React](https://github.com/facebook/react)
- [Ampersand.js](https://github.com/AmpersandJS)
- [MongoDB](https://www.mongodb.org/) w/ [Mongoose](http://mongoosejs.com/)
- [Express](http://expressjs.com/)
- [Node.js](https://nodejs.org/)

Additional dependencies include:
- [Passport](http://passportjs.org/)
- [Webpack](http://webpack.github.io/) w/ [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack)
- [Stylus](https://learnboost.github.io/stylus/)
- [yeti.css](http://yeticss.com/)
