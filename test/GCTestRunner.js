var request = require('request'),
	should = require('should'),
	_ = require('underscore'),
	assert = require('assert'),
	GuestcardService = require('../models/GuestcardRequest'),
	//Specs = require('../specs/guestcard.js'),
	util = require('util'),
	fs = require('fs'),
	path = require('path'),
	sets = require('simplesets'),
	basePath = path.dirname(__dirname),
	specsDir = path.resolve(basePath, 'specs/Guestcard');

var files = fs.readdirSync(specsDir);
_.each(files, function(file){
	var specs = require(path.resolve(specsDir, file));
	describe('Guestcard '+file.slice(0, -3)+': ', function () {
		_.each(specs, function(spec){
			it(spec.name, function (done) {
				GuestcardService(spec.gc, function (err, res, body) {
					assert.equal(err, null);
		    		res.statusCode.should.equal(200);
		    		//console.dir(body.response.command);
		    		testSuccess(body.response, spec);
		    		if(spec.result && spec.result.errors)
		    			testErrors(body.response, spec.result.errors);
		    		if(spec.result && spec.result.messages){
		    			//console.log(body.response.command);
		    			testMessages(body.response, spec.result.messages);	
		    		}
					done();
				});
			});
		});
	});
})	

function testSuccess(response, spec) {
	var expectedSuccess = 'true';
	if(spec.result && spec.result.errors){
		expectedSuccess = 'false';
	}
	try{
		response.command._success.should.equal(expectedSuccess);
	}
	catch(e) {
		assert.fail(response, spec.result,undefined, "!~");
	}
}

function testErrors(response, exepectations) {
	var errs = new sets.Set();
	try{
		//Extract errors from the response
		_.each(response.command.errors, function(err) {
			errs.add(err.message);
		});
	
		errs.equals(new sets.Set(exepectations)).should.be.true;
	}
	catch(e) {
		assert.fail(errs.array(), exepectations,undefined, "!==");
	}
	
}

function testMessages(response, exepectations) {
	
	var msgs = new sets.Set();
	try{
		//Extract errors from the response
		_.each(response.command.messages, function(msg) {
			msgs.add(msg._);
		});
	
		msgs.equals(new sets.Set(exepectations)).should.be.true;
	}
	catch(e) {
		assert.fail(msgs.array(), exepectations,undefined, "!==");
	}
}

	