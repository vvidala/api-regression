module.exports = [
	{
		name: "Incorrect username and password",
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
	,{
		name: "Missing username",
		gc:{
			"update" :{
				"username":" ",
				"password": 2
			}
		},
		result: {
			"errors": ['Login Failed due to invalid \"username or password\". Please try again.'
			]
		}
	}
	,{
		name: "Missing password",
		gc:{
			"update" :{
				"username": 2,
				"password": " "
			}
		},
		result: {
			"errors": ['Login Failed due to invalid \"username or password\". Please try again.'
			]
		}
	}
];