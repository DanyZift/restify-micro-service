var should = require('should');
var request = require('supertest');
var server = require('../../../app');

process.env.A127_ENV = 'test';

describe('controllers', function() {

  describe('sample_controller', function() {

    describe('GET /sample', function() {

      it('should return an JSON Object default limits & offset', function(done) {

        request(server)
          .get('/sample')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.eql({limit: 10, offset: 0})
            done();
          });
      });

      it('should accept a limit & offset parameter', function(done) {

        request(server)
          .get('/sample')
          .query({ limit: 20, offset: 100 })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.eql({limit: 20, offset: 100});

            done();
          });
      });

    });
    describe('POST /sample', function(){});
    describe('PUT /sample', function(){})
    describe('DELETE /sample', function(){})

  });

});
