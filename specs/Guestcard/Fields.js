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
	//Comments Test
	,{
		name: "Comments tests",
		gc:{
			"update" :{
				"Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem tellus, porta in quam id, pretium faucibus augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam lobortis pretium mauris nec volutpat. Nullam tellus odio, porttitor sed vulputate in, venenatis ac augue. Phasellus non nisi est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed viverra tempor rhoncus. Maecenas gravida imperdiet metus a ultricies. Fusce felis quam, adipiscing a vestibulum sit amet, malesuada id massa. Pellentesque elit diam, semper non dapibus quis, sodales in diam. Nullam id sollicitudin nisl. Sed cursus lacinia turpis et ornare. Morbi interdum porttitor ipsum a interdum. Mauris eget turpis risus.\n\n"+
							"Nunc mollis orci nibh, ut consectetur nulla ultrices nec. Mauris volutpat pellentesque purus eget laoreet. Integer vehicula, lectus sit amet commodo pretium, ante tellus pulvinar quam, sed eleifend turpis nisl a magna. Sed ut ligula non est varius cursus. Nulla auctor lacus sem, et consequat nunc ullamcorper a. Nullam ultrices risus quis eleifend bibendum. Nam massa justo, egestas a posuere at, ornare a dui. Donec lacinia, mauris vitae condimentum pretium, neque leo adipiscing velit, ac sollicitudin dolor sem eget lorem. Duis commodo neque diam, quis auctor velit eleifend nec. Mauris dapibus, tortor ac pellentesque sodales, libero tellus condimentum lectus, nec cursus dui leo sed lectus. Cras at leo elementum, luctus sem vitae, pretium tellus. Nullam tempor egestas justo id porttitor. Proin hendrerit, lacus ac consequat tristique, lorem ante ornare neque, non aliquam velit ante quis lacus. Sed dictum leo tellus, nec venenatis risus pharetra eu. Nulla rhoncus ut tortor sit amet interdum. Fusce ac consequat lacus.\n\n"+
							"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer aliquet non dui eu vulputate. Nullam sodales nisl magna, vitae tincidunt neque facilisis ut. Phasellus vulputate, enim et iaculis consectetur, magna mi adipiscing arcu, nec consectetur sem est at ligula. Nullam venenatis augue lorem, posuere euismod ipsum placerat ac. In dapibus lacinia fermentum. Curabitur ac suscipit purus, nec pretium dui. Aliquam at tellus sit amet nibh eleifend pulvinar sed ac lacus. Donec lacus neque, feugiat vel ultricies sit amet, tempus vel nisl. Duis auctor egestas lorem, bibendum egestas nulla sodales vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\n"+
							"Praesent feugiat elementum nibh. Nam id enim sit amet odio sodales consectetur. In blandit faucibus lectus, lacinia ultricies quam varius at. Sed facilisis pharetra tellus. Aenean in leo vitae diam malesuada tempus. Proin eget eros dignissim, bibendum lacus in, laoreet diam. Duis ac tincidunt dui, ut vulputate ipsum. Etiam porta interdum massa, vitae blandit est blandit blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, urna non cras amet.	"
			}
		},
		result: {
			"messages": ["Comments fall outside the allowed range (0-3000 characters) or contain invalid characters."]
		}
	}
];


module.exports = specs;