require ('dotenv').config ();
const nameApp = 'RegisterController';
const express = require ('express');
const app = express ();
const routes = require ('./routes/routes.js');
const bodyParser = require ('body-parser');
const debug = require ('debug')(nameApp);

app.use((req, res, next) => {
  debug('App is in use, got called with this URL: ', req.url, ' and request method', req.method);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Request-Method', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes (app);

app.listen(8080);
console.log ('Servidor Iniciado')