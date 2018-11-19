const request = require('supertest');
const app = require('./app');

describe('app', () => {
  it('should get the index route', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      if (err) throw err;
    });

    done();
  });
})