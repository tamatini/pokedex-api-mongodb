/* Controleur de Pokemons */
/* Import du model */
const res = require('express/lib/response');
const Pokemon = require('../model/pokemonModel');

/* Contient toutes les méthodes pour la route pokemon */

/* Retourne une liste de toute les objects pokemon */
const getAllPokemons = async(req, res) => {
  try {
    const pokemons = await Pokemon.find();
    if (pokemons.length === 0) {
      res.send({msg: "Il n'y a aucun Pokémon enregistrer"})
    } else {
      res.status(200).send(pokemons);
    }
  } catch (err) {
    if (err) return console.log(err);
  }
};

/* Retourne un pokemon trouver dans la liste par rapport à son id */
const getSinglePokemon = async(req, res) => {
  try {
    const id = Number(req.params.id);
    const pokemon = await Pokemon.findOne({pokemonId: id});
    if (!pokemon) {
      res.sendStatus(404)
    } else {
      res.status(200).send(pokemon);
    }
  } catch(err) {
    if (err) return console.log(err);
  }
};

const deleteSinglePokemon = async(req, res) => {
  try {
    const id = Number(req.params.id);
    const pokemon = await Pokemon.findOneAndDelete({pokemonId: id});
    if (!pokemon) {
      res.send({msg: "Ce Pokémon n'existe pas"});
    } else {
      res.status(200).send({msg: "Le Pokémon à bien été supprimer"});
    }
  } catch (err) {
    if (err) return console.log(err);
  }
};

const updateSinglePokemon = async(req, res) => {
  try {
    const id = Number(req.params.id);
    const body = req.body;
    const pokemon = await Pokemon.findOneAndUpdate({pokemonId: id}, body, {new: true});
    if (!pokemon) {
      res.send({msg: "Ce Pokémon n'existe pas"});
    } else {
      res.status(200).send(pokemon);
    }
  } catch (err) {
    if (err) return console.log(err);
  }
}

module.exports = {
  getAllPokemons,
  getSinglePokemon,
  deleteSinglePokemon,
  updateSinglePokemon
};