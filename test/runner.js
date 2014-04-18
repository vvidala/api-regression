var request = require('request'),
	should = require('should'),
	_ = require('underscore'),
	assert = require('assert'),
	GuestcardService = require('../models/GuestcardRequest'),
	Specs = require('../specs/guestcard.js'),
	util = require('util');

/*
describe('A server receiving a request', function () {
  //before(startServer);

  	// Make request and save results to `this.err`, `this.res`, and `this.body`
  	httpUtils.save({
	    url: 'https://api.github.com/repos/mikeal/request',
	    headers: {
	        'User-Agent': 'request'
	    }
	});

  // Assert against mocha's `this` context
  it('responded with "Hello World!"', function () {
    assert.equal(this.err, null);
    this.res.statusCode.should.equal(200);
    console.log(this.body);
  });
});
*/
describe('Guestcard Tests: ', function () {
	_.each(Specs, function(spec){
		it(spec.name, function (done) {
			GuestcardService(spec.gc, function (err, res, body) {
				assert.equal(err, null);
	    		res.statusCode.should.equal(200);
	    		
	    		if(spec.result && spec.result.errors)
	    			testErrors(body.response.command.errors, spec.result.errors);
	    		if(spec.result && spec.result.messages){
	    			//console.log(body.response.command);
	    			testMessages(body.response.command.messages, spec.result.messages);	
	    		}
	    		
				done();
			});
		});
	});
});


function testErrors(errors, exepectations) {
	try{
		assert.ok(errors, "Errors node is empty");
		if(!util.isArray(errors))
			errors = [errors];
		if(!util.isArray(exepectations))
			exepectations = [exepectations];

		errors.length.should.equal(exepectations.length);
		_.each(errors, function(err){
			exepectations.indexOf(err.error.message).should.be.greaterThan(-1);
		});
	}
	catch(e) {
		assert.fail(errors, exepectations,undefined, "!==");
	}
	
}

function testMessages(messages, exepectations) {
	try{
		assert.ok(messages, "Messages node is empty");
		if(!util.isArray(messages))
			messages = [messages];
		if(!util.isArray(exepectations))
			exepectations = [exepectations];

		messages.length.should.equal(exepectations.length);
		_.each(messages, function(msg){
			exepectations.indexOf(msg.note._).should.be.greaterThan(-1);
		});
	}
	catch(e) {
		assert.fail(messages, exepectations, undefined, "!==");
	}
	
}

	