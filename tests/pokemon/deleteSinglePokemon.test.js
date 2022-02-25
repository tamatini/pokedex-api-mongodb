/* Import des packages */
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');
const { setup, postPokemon } = require('../test-helper');

/* Variables locale */
const url = "/api/v1/pokemons";

describe('Supprimer un Pokémon', function() {
  setup();

  it("Retourne un status code 200", async() => {
    await postPokemon();
    const res = await request(app).delete(url+(`/${001}`));
    expect(res.statusCode).to.equal(200);
  });

  it("Retourne le message de suppression", async() => {
    await postPokemon();
    const res = await request(app).delete(url+(`/${001}`));
    expect(res.body).has.property('msg', "Le Pokémon à bien été supprimer")
  });
});