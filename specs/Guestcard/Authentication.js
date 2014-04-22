var specs = [
	//Site Id tests
	{
		name: "Passing Test"
	},
	{
		name: "Check username is required",
		gc: {
			"omit": ['username', 'password']
		},
		result: {
			"errors": ['Login Failed due to invalid "username or password". Please try again.']
		}
	}

];

module.exports = specs;