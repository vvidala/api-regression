	var specs = [
	//Site Id tests
	{
		name: "Passing Test"
	}
	,{
		name :"Non-numeric siteId", 
		gc:{
			"update" :{
				"siteId": "ABCD"
			}
		},
		result: {
			"errors": ["Site (ABCD) is not a valid ForRent Site ID. The site does not exist or is inactive."]
		}
	}
	,{
		name: "Missing SiteId",
		gc:{
			"omit" :["siteId"]
		},
		result: {
			"errors": ["Site ID is a required field."]
		}
	}
	,{
		name: "Missing first name",
		gc:{
			"omit" :["firstName"]
		},
		result: {
			"errors": ["First Name is a required field."]
		}
	}
	//ByEmail Tests
	,{
		name: "Missing first name",
		gc:{
			"update" :{
				"byEmail": 2
			}
		},
		result: {
			"messages": ["Incorrect format for Email preference, should be 0/1. Please see FRMS documentation for data types and format."
			]
		}
	}
	,{
		name: "Incorrect username",
		gc:{
			"update" :{
				"username": 2,
				"password": 2
			}
		},
		result: {
			"errors": ['Login Failed due to invalid \"username or password\". Please try again.'
			]
		}
	}
	//Email Address Tests
	,{
		name: "Missing Email",
		gc:{
			"omit" : ["emailAddress"]
			
		},
		result: {
			"errors": ['Email address is a required field.']
		}
	}
	,{
		name: "Incorrect email format",
		gc:{
			"update" :{
				"emailAddress": "founda.problem@@gmail.com"
			}
		},
		result: {
			"errors": ["Email address format is invalid."]
		}
	}
];


module.exports = specs;