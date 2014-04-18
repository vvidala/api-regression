var Guestcard = require('./guestcard'),
	Config = require('../config/app.js'),
	request = require('request'),
	parser = require('xml2js').parseString;

function addUnderscore(str) {
	return "_"+str;
}
module.exports = function(gc, _cb) {
	var opts = {
		method: 'POST'
		, url: Config.baseUrl + Config.externalGCEndpoint
		, form: Guestcard(gc)
	};
	//console.log(opts.form);
	request(opts, function(err, res, body){
		//console.log(body);
		parser(body, {attrNameProcessors: [addUnderscore], mergeAttrs: true, explicitArray: false}, function (err, result) {
		    //console.log(result);
		    _cb(err, res, result);
		});
		//_cb(err, res, JSON.parse(parser.toJson(body)));
	});
};

