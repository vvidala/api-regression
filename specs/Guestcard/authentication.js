module.exports = [
	{
		name: "Incorrect username",
		gc:{
			"update" :{
				"username": 2,
				"password": 2
			}
		},
		result: {
			"errors": ["Login Failed due to invalid 'username or password'. Please try again."
			]
		}
	}
];