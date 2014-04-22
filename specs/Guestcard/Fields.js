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
				"firstName": "Abcdefghijklmnopqrstuvadfasdfasdflkjasdlkjasdlfkjlkawxyzabcdefghijk",
				"comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget dignissim orci. Aliquam dictum vehicula est, non sodales justo dictum et. Sed vel arcu quis odio hendrerit fermentum a ac enim. Pellentesque augue ligula, varius eget felis quis, ornare porttitor sapien. Suspendisse rhoncus adipiscing nisl ac venenatis. Sed in interdum diam, sit amet luctus nisi. Fusce mauris nulla, commodo vitae imperdiet eu, convallis vitae diam."+
							"Morbi elementum risus et risus vestibulum sodales. Sed et aliquam elit, quis ultricies purus. Vestibulum vel vulputate lectus, vel vestibulum nunc. Suspendisse velit neque, accumsan et urna in, dignissim consequat justo. Pellentesque malesuada ultrices nunc in fermentum. Morbi condimentum mollis fringilla. Donec ultricies nulla ac tellus dignissim aliquam. Sed nisi magna, aliquam id purus vel, auctor elementum tortor. Donec rhoncus purus ligula, id faucibus augue rutrum id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquet fermentum ultrices. Vestibulum auctor turpis eu nulla luctus, quis suscipit risus facilisis. Fusce accumsan nibh tincidunt sodales tincidunt. Donec vel cursus nulla."+
							"Mauris tincidunt orci eget dui tristique congue. Vivamus non enim vulputate, rhoncus nisl vitae, vulputate turpis. Vestibulum eu ornare purus, eget dictum risus. Nunc eleifend egestas semper. Mauris porta a dolor at interdum. Integer pellentesque feugiat ipsum eget commodo. In mauris erat, bibendum at risus a, auctor porttitor risus. Donec nisl dolor, sagittis a tortor eget, vulputate fermentum velit."+
							"Curabitur consequat luctus massa, a vehicula ligula. Suspendisse quis lorem odio. Praesent cursus dictum lorem, sed vestibulum neque sodales quis. Fusce ultricies nunc sit amet arcu lacinia rhoncus. Nunc vel tincidunt quam. Maecenas vestibulum erat quis sollicitudin rhoncus. In dapibus orci ut nisl feugiat imperdiet. Ut dui sem, eleifend hendrerit molestie id, tincidunt at metus."+
							"Donec nec eleifend arcu. Donec ipsum massa, porttitor sed neque ornare, rhoncus varius nisi. Pellentesque ut lacinia augue, vitae luctus odio. Nullam in eros semper, volutpat nisl vitae, sollicitudin nisi. In fermentum sem sapien, nec rutrum est porta at. Quisque dignissim orci sit amet dolor fermentum sagittis. Phasellus porta quam vitae nulla malesuada eleifend. Pellentesque sollicitudin velit arcu, in condimentum diam vulputate tincidunt. Nulla facilisi."+
							"Integer et nisl eget sem tincidunt molestie. Morbi ullamcorper nisl vestibulum sem aliquet tincidunt. Duis est lorem, venenatis quis libero sed, consequat egestas est. Duis tincidunt hendrerit erat. Mauris aliquam imperdiet lectus, eu volutpat magna pharetra pellentesque. Suspendisse eu felis facilisis, euismod libero a, fermentum nisl. Vestibulum dignissim rutrum egestas. Vestibulum libero mauris, sollicitudin dapibus consequat sed, volutpat eu metus. In adipiscing nisi in nulla vulputate aliquet. Ut aliquet vestibulum sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc consectetur urna turpis, in elementum lacus facilisis quis."
			}
		},
		result :{
			"messages" :["First Name falls outside the allowed range (2-30 characters).", "Comments fall outside the allowed range (0-3000 characters) or contain invalid characters."]
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