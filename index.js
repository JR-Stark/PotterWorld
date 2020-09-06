// Premier reflexe : les variables d'environnement !
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5050;

// et c'est parti pour Express !
const express = require('express');

const app = express();

// réglages views
app.set('views', 'app/views');
app.set('view engine', 'ejs');
//app.set('views', __dirname + '/pages'); 

// les statiques
app.use(express.static('public'));

// on rajoute la gestion des POST body
app.use(express.urlencoded({extended: true}));

// et on rajoute la gestion des sessions
const session = require('express-session');
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'Un Super Secret'
}));

// et hop, notre middleware magique
const userMiddleware = require('./app/middlewares/user');
app.use(userMiddleware);

// le routage
const router = require('./app/router');
app.use(router);

// lancement du serveur
app.listen( PORT,  () => {
  console.log(`Listening on ${PORT}`);
});
