const frisby = require('frisby');

describe('index', () => {
  test('get /', (done) => {
    frisby.get('http://localhost:3000/')
      .expect('status', 200)
      .done(done);
  });
});
