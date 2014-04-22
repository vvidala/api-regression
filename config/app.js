
var env = process.env,
	config = {
		baseUrl: 'http://forrent.vvidala.frlabs.com',
		//externalGCEndpoint : '/external/guestcard/submit.php'
		externalGCEndpoint: '/guestcard/external/submit'
	};

if(env.BASEURL) config.baseUrl = env.BASEURL;
module.exports = config;