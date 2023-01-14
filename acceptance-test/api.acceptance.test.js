import request from 'supertest';
import { expect } from 'chai';
import { app } from '../src/index.js';

const urlRequest = request(process.env.DEPLOY_URL);

describe('GET /countries/:name', () => {
    it('should return a country object with area and population properties', async () => {
        const response = await request(app).get('/countries/india');
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.property('area');
        expect(response.body).to.have.property('population');
    });

    it('should return status 404 if the country does not exists', async () => {
        const response = await request(app).get('/countries/fakecountry');
        expect(response.statusCode).to.equal(404);
        expect(response.body).to.have.property('message').equal("This country doesn't exists");
    });
});
