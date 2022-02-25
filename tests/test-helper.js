/* Import de module */
const server = require('../src/db/index');
const Pokemon = require('../src/db/model/pokemonModel');

const setup = () => {
  before(async() => {
    try {
      await server.connectInMemory();
    } catch (err) {
      if (err) return console.log(err);
    }
  });

  beforeEach(async() => {
    try {
      await server.clearDatabase();
    } catch (err) {
      if (err) console.log(err);
    }
  });

  after(async() => {
    try {
      await server.close();
    } catch(err) {
      if (err) return console.log(err);
    }
  })
};

const postPokemon  = async() => {
  try {
    const pokemon = new Pokemon({
      pokemonId: 001,
      name: "Bulbizarre",
      pv: 45,
      power: 49,
      defence: 49,
      speed: 45,
      special: 65 
    })
    return await pokemon.save();
  } catch (err) {
    if (err) return console.log(err);
  };
};

module.exports = {
  setup,
  postPokemon
};