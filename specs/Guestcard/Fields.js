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
];


module.exports = specs;