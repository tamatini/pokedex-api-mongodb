/* Import des packages */
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');
const { setup, postPokemon } = require('../test-helper');

/* Variables locale */
const url = "/api/v1/pokemons";
const update = {
  pv: 100
}


describe('Mettre à jour un pokemon', function() {
  setup();

  it('Retourne un status code 200', async() => {
    await postPokemon(); 
    const res = await request(app).put(url+(`/${001}`), update);
    expect(res.statusCode).to.equal(200);
  });

  it('Les points de vie sont maintenant à 100', async() => {
    await postPokemon(); 
    const res = await request(app).put(url+`/${001}`).send(update);
    expect(res.body.pv).to.equal(100);
  });
});