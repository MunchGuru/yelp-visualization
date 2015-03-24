var assert = require('assert');
var request = require('request');
var _ = require('lodash');

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
      var apiURL = 'http://localhost:4568/api/';
      request(apiURL, function(error, response, body){
        assert.equal(error, null, 'error should be null');
        assert.equal(isJSON(body), true, 'body should be parsable');

        assert.equal(response.statusCode, 200, 'response should be 200');
        body = JSON.parse(body);
        assert.equal(Array.isArray(body), true, 'body should be array');
        assert.equal(body[0].api, 'restaurants', 'first value in body should be restaurants');
        done();
      });
    });
  });

  

  describe('Check to see if /api/bars/ loads info', function(){
    it('should return an array and check to see if first value is there', function(done){
      var apiURL = 'http://localhost:4568/api/bars/';
      request(apiURL, function(error, response, body){
        assert.equal(error, null, 'error should be null');
        assert.equal(isJSON(body), true, 'body should be parsable');

        assert.equal(response.statusCode, 200, 'response should be 200');
        body = JSON.parse(body);
        assert.equal(Array.isArray(body), true, 'body should be array');
        assert.equal(body[0].api, 'airportlounges', 'first value in body should be restaurants');
        done();
      });
    });
  });

  describe('Check to see if /api/bars/ loads info', function(){
    it('should return an array and check to see if first value is there', function(done){
      var apiURL = 'http://localhost:4568/api/airportlounges';
      request(apiURL, function(error, response, body){
        assert.equal(error, null, 'error should be null');
        assert.equal(isJSON(body), true, 'body should be parsable');

        assert.equal(response.statusCode, 200, 'response should be 200');
        body = JSON.parse(body);
        assert.equal(_.isPlainObject(body), true, 'body should be object');
        assert.notEqual(body.businesses, undefined, 'body should have businesses set');
        done();
      });
    });
  });


});