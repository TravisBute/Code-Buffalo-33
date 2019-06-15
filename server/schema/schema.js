const graphql = require('graphql');
//const Activity = require('../model/activity');
const fetch = require('node-fetch');
const request = require('request');


const { GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLFloat,
	GraphQLList,
	GraphQLNonNull
} = graphql;

const ActivityType = new GraphQLObjectType({
    name: "Activity",
    fields: () => ({
	name: {type: GraphQLString},
	accessibility: {type: GraphQLFloat},
	atype: {type: GraphQLString},
	participants: {type: GraphQLInt},
	price: {type: GraphQLFloat},
	link: {type: GraphQLString},
	key: {type: GraphQLID}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
	activity:{
	    type: ActivityType,
	    args: {key:{type: GraphQLID}},
	    resolve(parent,args){
		request('https://www.boredapi.com/api/activity/', function (error, response, body) {
		    return console.log(JSON.parse(body)['activity'])
		    
		}
	    }
	};
    })

    module.exports = new GraphQLSchema({
	query: RootQuery
    });
