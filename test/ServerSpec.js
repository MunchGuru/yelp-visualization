var assert = require('assert');
// var request = require('request');
var request = require('supertest');
var _ = require('lodash');
var app = require('../server/app.js');

function isJSON(str) {
  'use strict';
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

describe('API Tests', function(){
  'use strict';
  describe('Check to see if test are working', function(){
    it('should return true ', function(){
      assert.equal(true, true);
    });
  });

  describe('Check to see if /api loads info', function(){
    it('should return an array and check to see if first value is there', function(done){
      request(app)
        .get('/api')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(error, res) {
          assert.equal(error, null, 'error should be null');
          assert.equal(Array.isArray(res.body), true, 'body should be array');
          assert.equal(res.body[0].api, 'restaurants', 'first value in body should be restaurants');
          done();
        });
    });
  });

  describe('Check to see if /api/bars loads info', function(){
    it('should return an array and check to see if first value is there', function(done){
      request(app)
        .get('/api/bars')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(error, res) {
          assert.equal(error, null, 'error should be null');
          assert.equal(Array.isArray(res.body), true, 'body should be array');
          assert.equal(res.body[0].api, 'airportlounges', 'first value in body should be airportlounges');
          done();
        });
    });
  });

  // test is broken

  // describe('Check to see if /api/airportlounges loads info', function(){
  //   it('should return an object and check to see if business is set', function(done){
  //     request(app)
  //       .get('/api/airportlounges')
  //       .expect('Content-Type', /json/)
  //       .expect(201)
  //       .end(function(error, res) {
  //         assert.equal(error, null, 'error should be null');
  //         console.log(error, res);
  //         assert.equal(_.isPlainObject(res.body), true, 'body should be object');
  //         assert.notEqual(res.body.businesses, undefined, 'body should have businesses set');
  //
  //         done();
  //       });
  //   });
  // });

});