var request = require('supertest');

describe('UserController', function() {
  describe('#create', function() {
    it('should create a user', function(done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({
           name: 'testUser',
           email: 'dalling.eric@gmail.com'
         })
        .expect(201, done);
    });
  });

  describe('#list', function() {
    it('should return a 200', function(done) {
      request(sails.hooks.http.app)
        .get('/user/list')
        .expect(200, done);
    });
  });
});
