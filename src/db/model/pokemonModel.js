const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  pokemonId: {
    type: Number,
    unique: [true, 'Cet identifiant existe déjà'],
    required: true
  },
  name: {
    type: String,
    unique: [true, 'Ce nom de Pokémon existe déjà'],
    require: true
  },
  pv: {
    type: Number,
    required: true
  },
  power: {
    type: Number,
    required: true
  },
  defence: {
    type: Number,
    required: true
  },
  speed: {
    type: Number,
    required: true
  },
  special: {
    type: Number,
    required: true
  }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;