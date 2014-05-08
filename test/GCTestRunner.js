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
	var sys = require('sys');


var timestamp = new Date().getTime();
var countSuccess = 0;
var files = fs.readdirSync(specsDir);
_.each(files, function(file){
	var specs = require(path.resolve(specsDir, file));
	describe('Guestcard '+file.slice(0, -3)+': ', function (done) {
		_.each(specs, function(spec){
			if(!spec.result || !spec.result.errors) {
		    	countSuccess++;
		    }
			it(spec.name, function () {
				if(spec.gc){
					spec.gc.comments = timestamp;
				}
				GuestcardService(spec.gc, function (err, res, body) {
					assert.equal(err, null);
		    		res.statusCode.should.equal(200);
		    		//console.dir(body.response.command);
		    		testSuccess(body.response, spec);
		    		if(spec.result && spec.result.errors)
		    			testErrors(body.response, spec.result.errors);
		    		if(spec.result && spec.result.messages){
		    			testMessages(body.response, spec.result.messages);	
		    		}	
				});
			});

		});
		after(function(done){
			if(countSuccess){
				console.log("waiting for sometime\n");
				setTimeout(function(){
					console.log("calling success check\n");
					testSuccessGcDatabase(timestamp, done);
				}, 60000);
			}
			else{
				done();
			}
		});	
	})
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
	
	var messages = response.command.messages;
		msgs = new sets.Set();
	try{
		//Extract errors from the response
		if(util.isArray(messages.note)) {
			_.each(messages.note, function(msg) {
				msgs.add(msg._);
			});
		}
		else {
			_.each(messages, function(msg) {
				msgs.add(msg._);
			});
		}
		
	
		msgs.equals(new sets.Set(exepectations)).should.be.true;
	}
	catch(e) {
		assert.fail(msgs.array(), exepectations,undefined, "===");
	}
}

function testSuccessGcDatabase (timestamp,_cb){
	var args = timestamp;
	var nodePath = "php "+basePath+"/scripts/confirmGcDatabase.php " + args +" "+countSuccess;
	var sys = require('sys');
	var childProcess = require('child_process');
	var child;
	child = childProcess.exec(nodePath, function (error, stdout, stderr) {
		sys.print('output: ' + stdout+"\n");
		sys.print('stderr: "' + stderr+"\"\n");
		if (error) {
			console.log('exec error: ' + error);
			assert.fail(stdout, "Success, All guestcards found in database");
		}
		_cb();
	});
}

	