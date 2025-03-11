import request from 'supertest';
import { expect } from 'chai';
import app from '../server.js'; // Assure-toi que server.js exporte `app`


describe('Test de la route principale', () => {
    it('devrait retourner Hello, World!', async () => {
        const res = await request(app).get('/');
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Hello, World!');
    });
});
