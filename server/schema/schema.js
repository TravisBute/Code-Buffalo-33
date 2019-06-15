const graphql = require('graphql');
const Activity = require('../model/activity');
const fetch = require('node-fetch');

const { GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLFloat,
	GraphQLList,
	GraphQLNonNull
      } = graphql;


const BASE_URL = 'https://www.boredapi.com/api/';

function fetchResponseByURL(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
}

/*function fetchPeople() {
  return fetchResponseByURL('/people/').then(json => json.people);
}
*/
function fetchACTIVITYByURL(relativeURL) {
  return fetchResponseByURL(relativeURL).then(json => json.activity);
}





const ActivityType = new GraphQLObjectType({
    name: "Activity",
    fields: () => ({
	name: {type: GraphQLString},
	accessibility: {type: GraphQLFloat},
	atype: {type: GraphQLString},
	participants: {type: GraphQLInt},
	price: {type: GraphQLFloat},
	link: {type: GraphQLString},
	key: {type: GraphQLID},
	
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
	activity:{
	    type: ActivityType,
	    args: {key:{type: GraphQLID}},
	    resolve(parent, args){
		//return Activity.findByID(args.id)
	    fetchACTIVITYByURL(`/activity/?key=5808228`);
		
	}
	     }
	} 
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
