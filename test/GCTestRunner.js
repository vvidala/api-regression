var request = require('request'),
	should = require('should'),
	_ = require('underscore'),
	assert = require('assert'),
	GuestcardService = require('../models/GuestcardRequest'),
	//Specs = require('../specs/guestcard.js'),
	util = require('util'),
	fs = require('fs'),
	path = require('path'),
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
})	



/*

*/

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

	