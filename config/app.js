
var env = process.env,
	config = {
		baseUrl: 'http://forrent.vvidala.frlabs.com',
		externalGCEndpoint : '/external/guestcard/submit.php'
	};

if(env.BASEURL) config.baseUrl = env.BASEURL;
module.exports = config;
console.log("Running tests against: "+config.baseUrl);