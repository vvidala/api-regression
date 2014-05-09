	/**
		This file is used to create guestcards body for submission and to test for their success or failure as a part of regression testing.
		Critical areas of guestcard such as first name etc if missing or invalid will result in error and a error message will be generated.
		Error message returned will be comapared with error message passed and the test will pass if two error messages match. 
		In these cases guestcard is considered failed and will not be submitted.
		Example of a failed guestcard is.
		// Invalid Site id
			{
				name :"Invalid site id",
				gc:{
					"omit" : ["Site_Id"]
				},
				result{
					"errors" :["Site ID is a required field."]
				}
			}
		In the same way fields which are not critical but entered in a wrong way return messages.
		In these cases guestcard will be submitted/passed but will generate a warning message
		Example to create tests for those fields is
		// Invalid extension
		{
			name :"invalid extension",
			gc:{
				"update":{
					"extension":123456
				}
			},
			result{
				"messages" :["Extension falls outside the allowed range (0-5 characters)."]
			}
		}
		Here we are testing for complete guestcard and not for validity of their individual fields because that is a part of unit testing already being done,
		but they can be added as desired in future using the example shown above.
	*/
	var crypto = require('crypto');
	var specs = [
	{
		//FRC mobile site test
		name :"FRC mobile site test",
		gc:{
			"siteId": 1000009125,
			"username": 'ForRentUniversity',
			"password": 'Go2Sch@0l',
			"firstName": 'Charmless',
			"lastName": 'Shaw',
			"emailAddress": '2486327771c2567@anon.oodle.com',
			"phone": 1234567890,
			"extension": 12345,
			"comments": '',
			"moveDate": '2014-02-27',
			"bedrooms": 1,
			"bathrooms": 1,
			"sendEmailConfirmation": 1,
			"byEmail": 1,
			"featListingSiteId": 1989,
			"responseType": 'xml',
			"version": 1
		}
	}
	,{
		//FRU Test
		name :"FRU Test",
		gc:{
			"siteId":1000009125,
			"username": 'ForRentUniversity',
			"password": 'Go2Sch@0l',
			"firstName": 'Charming',
			"lastName": 'Shaw',
			"emailAddress": '2486327771c2567@anon.oodle.com',
			"phone": 1234567890,
			"extension": 12345,
			"comments": '',
			"moveDate": '2014-02-27',
			"bedrooms": 1,
			"bathrooms": 1,
			"sendEmailConfirmation": 1,
			"byEmail": 1,
			"featListingSiteId": 1989,
			"responseType": 'xml',
			"version": 1,
			"guestCardDate": '2014-01-01 22:22:22'
		}
	}
	,{
		// FR Android App Test
		name : "FR Android App Test",
		gc:{
			"siteId":1000009125,
			"username": 'frc_android_phone_app',
			"password": 'frc_andr0id_ph0',
			"firstName": 'Charley',
			"lastName": 'Shaw',
			"emailAddress": '2486327771c2567@anon.oodle.com',
			"phone": 1234567890,
			"byEmail": 1,
			"sendEmailConfirmation":1,
			"comments": '',
			"responseType": 'xml',
			"version": 1
		}
	},
	{
		// FR iOS App Test
		name : "FR iOS App Test",
		gc:{
			"siteId":1000009125,
			"username": 'frc_ios_phone_app',
			"password": 'frc_i0$_ph0n3_@',
			"firstName": 'Charlie',
			"lastName": 'Shaw',
			"emailAddress": '2486327771c2567@anon.oodle.com',
			"phone": 1234567890,
			"byEmail": 1,
			"sendEmailConfirmation":1,
			"comments": '',
			"responseType": 'xml',
			"version": 1
		}
	},
	{
		// This test should fail
		name : "Failing Test",
		gc:{
			"siteId":1000009125,
			"username": 'not_A_real_username',
			"password": 'a_very_Bad_password',
			"firstName": 'Charlie',
			"lastName": 'Shaw',
			"emailAddress": '2486327771c2567@anon.oodle.com',
			"phone": 1234567890,
			"byEmail": 1,
			"sendEmailConfirmation":1,
			"comments": '',
			"responseType": 'xml',
			"version": 1
		},
		result: {
			"errors": ['Login Failed due to invalid "username or password". Please try again.']
		}
	}
];


module.exports = specs;