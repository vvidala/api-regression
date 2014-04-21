
var env = process.env,
	config = {
		baseUrl: 'http://helium.forrent.com',
		externalGCEndpoint : '/external/guestcard/submit.php'
	};

if(env.BASEURL) config.baseUrl = env.BASEURL;
module.exports = config;