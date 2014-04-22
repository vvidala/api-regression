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
		name :"Site id out of allowed range", 
		gc:{
			"update" :{
				"siteId": 21000000000
			}
		},
		result: {
			"errors": ["Site (21000000000) falls outside the allowed range (1- 2100000000)."]
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
			"errors": ['First Name is a required field.']
		}
	},
	{
		name : "First name too short",
		gc:{
			"update" :{
				"firstName": ""
			}
		},
		result: {
			"errors": ['First Name is a required field.']
		}
	}
	,{
	name : "First name too long",
		gc:{
			"update" :{
				"firstName": "Abcdefghijklmnopqrstuvadfasdfasdflkjasdlkjasdlfkjlkawxyzabcdefghijk"
			}
		},
		result :{
			"messages" :["First Name falls outside the allowed range (2-30 characters)."]
		}
	}
	,{
		name: "Missing last name",
		gc:{
			"omit" :["lastName"]
		},
		result: {
			"errors": ['Last Name is a required field.']
		}
	}
	,{
		name : "last name too short",
		gc:{
			"update" :{
				"lastName": "z"
			}
		},
		result: {
			"messages": ["Last Name falls outside the allowed range (2-30 characters)."]
		}
	}
	,{
	name : "last name too long",
		gc:{
			"update" :{
				"lastName": "Abcdefghijklmnopqrstuvadfasdfasdflkjasdlkjasdlfkjlkawxyzabcdefghijk"
			}
		},
		result :{
			"messages" :["Last Name falls outside the allowed range (2-30 characters)."]
		}
	}
	//ByEmail Tests
	,{
		name: "Incorrect email",
		gc:{
			"update" :{
				"byEmail": 2
			}
		},
		result: {
			"messages": ["Incorrect format for Email preference, should be 0/1. Please see FRMS documentation for data types and format."]
		}
	}
	//phone number tests
	,{
		name : "Incorrect phone number",
		gc:{
			"update":{
				"phone" : 987654321987654321987
			}
		},
		result:{
			"messages":["Phone falls outside the allowed range (0-20 characters)."]
		}
	}
	,{
		name : "Non-numeric phone number",
		gc:{
			"update":{
				"phone" : "abcd"
			}
		},
		result:{
			"messages":["Phone may only contain numbers."]
		}
	}
	//extension tests
	,{
		name : "Incorrect extension",
		gc:{
			"update":{
				"extension":123456
			}
		},
		result:{
			"messages":["Extension falls outside the allowed range (0-5 characters)."]
		}
	}
	,{
		name : "Non-numeric extension",
		gc:{
			"update":{
				"extension":"ABCD"
			}
		},
		result:{
			"messages":["Extension may only contain numbers."]
		}
	}
	// Move in date tests
	,{
		name :"Incorrect Move In date",
		gc:{
			"update":{
				"moveDate" : 08-08-0808
			}
		},
		result:{
			"messages":["Incorrect Date format for Move Date. Please format dates as follows:  yyyy-mm-dd."]
		}

	}
];


module.exports = specs;