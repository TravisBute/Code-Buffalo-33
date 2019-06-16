const graphql = require('graphql');
//const schema = require('graphql-schema');
const Activity = require('../model/activity');
//const app = require('../app');
//const fetch = require('node-fetch');
const request = require('request');
//const _ = require('lodash');
//const { buildSchema } = require('graphql');
//var mongoose = require('mongoose');
const { GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLFloat,
	GraphQLList,
	GraphQLNonNull
      } = graphql;


var actv,a,b,c,d,e,f,g;

    
var ActivityType = new GraphQLObjectType({
    name: 'Activity',
    fields: () => ({
	name: {type: GraphQLString},
	accessibility: {type: GraphQLFloat},
	atype: {type: GraphQLString},
	participants: {type: GraphQLInt},
	price: {type: GraphQLFloat},
	link: {type: GraphQLString},
        key: {type: GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:() => ({
	active:{
	    type: ActivityType,
	    args:{key:{type: GraphQLInt}},
	    resolve: (parent,args) => {
	//	request('https://www.boredapi.com/api/activity?key=' + args.key)
	request(`https://www.boredapi.com/api/activity?key=${args.key}`, function (error, response, body){
	    a = JSON.parse(body)['activity'];
	    b = JSON.parse(body)['accessibility'];
	    c = JSON.parse(body)['type'];
	    d = JSON.parse(body)['participants'];
	    e = JSON.parse(body)['price'];
	    f = JSON.parse(body)['link'];
	    g = JSON.parse(body)['key'];
                }),
		console.log(a);
		console.log(b);
		console.log(c);
		console.log(d);
		console.log(e);
		console.log(f);
		console.log(g);
		let x = new Activity({
	 name: a,
	accessibility: b,
	atype: c,
	participants: d,
	price:  e,
	link:  f,
        key: g      
		})
		return x.save();
		
	    }  
	},
    }),
});





		
module.exports = new GraphQLSchema({
    query:RootQuery
});

