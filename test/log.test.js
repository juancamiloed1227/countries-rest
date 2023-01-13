import { expect } from 'chai';
import Log from '../src/models/log.js';

describe('Log', () => {
    it('should create a new log', (done) => {
        const log = new Log({
            query: (sql, cb) => cb(null, 'results')
        });
        log.create("Get some country activity", (error, results) => {
            expect(error).to.be.null;
            expect(results).to.equal('results');
            done();
        });
    });

    it('should return error on create a new log', (done) => {
        const log = new Log({
            query: (sql, cb) => cb('error', null)
        });
        log.create("Get some country activity", (error, results) => {
            expect(error).to.equal('error');
            done();
        });
    });
});
