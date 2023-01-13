import { expect } from 'chai';
import { getCountryByName } from '../controllers/api.js';
import Log from '../models/log.js';

describe('getCountryByName', () => {
  it('should return an object with area and population properties', async () => {
    // setup test data
    const req = { params: { name: 'spain' }, connection: { query: () => { } } }
    const res = {
      status: function (status) {
        this.statusCode = status;
        return this;
      },
      json: function (data) {
        this.data = data;
      }
    };
    const next = function () { }

    // call the function
    const response = await getCountryByName(req, res, next);
    console.log(response);

    // test results
    expect(res.statusCode).to.equal(200);
    expect(res.data).to.have.property('area');
    expect(res.data).to.have.property('population');
  });

  it('should return status 404 if the country doesn’t exists', async () => {
    // setup test data
    const req = { params: { name: 'nonexistcountry' } }
    const res = {
      status: function (status) {
        this.statusCode = status;
        return this;
      },
      json: function (data) {
        this.data = data;
      }
    };
    const next = function () { }

    // call the function
    await getCountryByName(req, res, next);

    // test results
    expect(res.statusCode).to.equal(404);
    expect(res.data).to.have.property('message').equal("This country doesn't exists");
  });
});
