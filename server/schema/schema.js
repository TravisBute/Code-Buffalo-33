const graphql = require('graphql');
const schema = require('graphql-schema');
//const Activity = require('../model/activity');
const fetch = require('node-fetch');
const request = require('request');
const _ = require('lodash');
const { buildSchema } = require('graphql');

const { GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLFloat,
	GraphQLList,
	GraphQLNonNull
      } = graphql;

/*
const activitySchema = new schema({
    name: String,
    age: Number,
    accessibility: Number,
    atype: String,
    participants: Number,
    price: Number,
    link: String,
    key: String
});
*/

//const BASE_URL = 'https://www.boredapi.com/api/activity/';

var actv;



    
const ActivityType = new GraphQLObjectType({
    name: 'Activity',
    fields: () => ({
	name: {type: GraphQLString, resolve: (activity) => activity.activity},
	accessibility: {type: GraphQLFloat, resolve: (activity) => activity.accessibility},
	atype: {type: GraphQLString, resolve: (activity) => activity.atype},
	participants: {type: GraphQLInt, resolve: (activity) => activity.participants},
	price: {type: GraphQLFloat, resolve: (activity) => activity.price},
	link: {type: GraphQLString, resolve: (activity) => activity.link},
        key: {type: GraphQLID, resolve: (activity) => activity.key}
		  })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
	active:{
	    type: ActivityType,
	    args: {key:{type: GraphQLID}},
	    resolve: (root,args) => {
	//	request('https://www.boredapi.com/api/activity?key=' + args.key)
    request(`https://www.boredapi.com/api/activity?key=${args.key}`, function (error, response, body) {
		actv = JSON.parse(body)['key'];
    })
		console.log(actv);
		return ActivityType.name;
	    }
	},
    }
});
		
module.exports = new GraphQLSchema({
    query:RootQuery
});

