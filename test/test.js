const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../app');

describe('Test de la route principale', () => {
    it('devrait retourner Hello, World!', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.equal('Hello, World!');
                done();
            });
    });
});
