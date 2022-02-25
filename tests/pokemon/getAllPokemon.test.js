/* Import des packages */
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../app');
const { setup, postPokemon } = require('../test-helper');


/* Variables locale */
const url  = '/api/v1/pokemons';

/* Test la route qui retourne tout les Pokémons */
describe("Retourne une liste de tout les pokemons", function() {
  setup();

  it('Affiche un status code 200', async() => {
    await postPokemon();
    const res = await request(app).get(url);
    expect(res.statusCode).to.equal(200);
  });

  it("La réponse est une liste", async() => {
    await postPokemon();
    const res = await request(app).get(url);
    expect(res.body).to.be.an.instanceOf(Array);
  });

  it("La liste contient des objets", async() => {
    await postPokemon();
    const res = await request(app).get(url);
    res.body.every(pokemon => {
      expect(pokemon).to.be.an.instanceOf(Object);
    });
  });

  it("Les objets possède le bon format", async() => {
    await postPokemon();
    const res = await request(app).get(url);
    expect(res.body[0]).has.property('pokemonId', 001)
    expect(res.body[0]).has.property('name', 'Bulbizarre');
    expect(res.body[0]).has.property('pv', 45);
    expect(res.body[0]).has.property('power', 49);
    expect(res.body[0]).has.property('defence', 49);
    expect(res.body[0]).has.property('speed', 45);
    expect(res.body[0]).has.property('special', 65);
  });
});