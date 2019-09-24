const expect = require('chai').expect
const request = require('supertest');
const express = require('express')
const app = express()

describe('Array', function() {
    it('should have length of 3', function() {
        expect([1, 2, 3]).to.have.lengthOf(3);
    });
});

describe('Netflix Watchlist API', function(){
    it('route to return all content should work', (done)=>{
        
        app.get('/api/content', function(req, res) {
            res.status(200).json(
                { title: 'HOC' })
          })
        
        request(app)
        .get('/api/content')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
