/* Import des packages */
const Router = require('express').Router();

/* Import du controleur */
const pokemonController = require('../db/controller/pokemonController');

/* Définition des routes */
Router.get('/', pokemonController.getAllPokemons);
Router.get('/:id', pokemonController.getSinglePokemon);
Router.delete('/:id', pokemonController.deleteSinglePokemon);
Router.put('/:id', pokemonController.updateSinglePokemon);


/* Export des routes Pokemons */
module.exports = Router;