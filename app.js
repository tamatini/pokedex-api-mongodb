/* Import des packages */ 
const express = require('express');
const app = express();

/* Import des routes */
const pokemonsRoute = require('./src/routes/pokemonRoutes');

/* Configuration application */
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* Définition des routes */
app.use('/api/v1/pokemons', pokemonsRoute);

/* Export de l'application */
module.exports = app;