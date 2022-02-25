/* Import des packages */
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');
const { setup, postPokemon } = require('../test-helper');

/* Variables locale */
const url = "/api/v1/pokemons";

/* Test la routes qui retourne un pokémon par rapport à son id */
describe("Retourne un Pokemon avec un id existant", function() {
  setup();

  it("Affiche un status code 200", async() => {
    await postPokemon();
    const res = await request(app).get(url+(`/${001}`));
    expect(res.statusCode).to.equal(200);
  });

  it("La réponse possède le bon format", async() => {
    await postPokemon();
    const res = await request(app).get(url+(`/${001}`));
    expect(res.body).has.property('pokemonId', 001);
    expect(res.body).has.property('name', 'Bulbizarre');
    expect(res.body).has.property('pv', 45);
    expect(res.body).has.property('power', 49);
    expect(res.body).has.property('defence', 49);
    expect(res.body).has.property('speed', 45);
    expect(res.body).has.property('special', 65);
  });
});

/* Test si l'id du Pokémon existe vraiment */
describe("Retourne une erreur si l'id est inexistant", function() {
  setup();

  it("L'id est inexistant", async() => {
    const res = await request(app).get(url+(`/${006}`));
    expect(res.statusCode).to.equal(404);
  });
});