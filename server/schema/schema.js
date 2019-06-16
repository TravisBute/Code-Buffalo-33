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



var a,b,c,d,e,f,g;


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
	randombyKey:{
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
		});
		let act = new Activity({
	name: a,
	accessibility: b,
	atype: c,
	participants: d,
	price:  e,
	link:  f,
  key: g
})
		return act.save();
	    }
	},

	randombyAccessibility:{
			type: ActivityType,
			args:{accessibility:{type: GraphQLFloat}},
			resolve: (parent,args) => {
	//	request('https://www.boredapi.com/api/activity?key=' + args.key)
	request(`https://www.boredapi.com/api/activity?accessibility=${args.accessibility}`, function (error, response, body){
			a = JSON.parse(body)['activity'];
			b = JSON.parse(body)['accessibility'];
			c = JSON.parse(body)['type'];
			d = JSON.parse(body)['participants'];
			e = JSON.parse(body)['price'];
			f = JSON.parse(body)['link'];
			g = JSON.parse(body)['key'];
		});
		let acc = new Activity({
	name: a,
	accessibility: b,
	atype: c,
	participants: d,
	price:  e,
	link:  f,
	key: g
})
		return acc.save();
},
    },

		randombyAType:{
				type: ActivityType,
				args:{atype:{type: GraphQLString}},
				resolve: (parent,args) => {
		//	request('https://www.boredapi.com/api/activity?key=' + args.key)
		request(`https://www.boredapi.com/api/activity?type=${args.atype}`, function (error, response, body){
				a = JSON.parse(body)['activity'];
				b = JSON.parse(body)['accessibility'];
				c = JSON.parse(body)['type'];
				d = JSON.parse(body)['participants'];
				e = JSON.parse(body)['price'];
				f = JSON.parse(body)['link'];
				g = JSON.parse(body)['key'];
			});
			let atype = new Activity({
		name: a,
		accessibility: b,
		atype: c,
		participants: d,
		price:  e,
		link:  f,
		key: g
		})
			return atype.save();
		},
			},

			randombyParticipants:{
					type: ActivityType,
					args:{participants:{type: GraphQLInt}},
					resolve: (parent,args) => {
			//	request('https://www.boredapi.com/api/activity?key=' + args.key)
			request(`https://www.boredapi.com/api/activity?participants=${args.participants}`, function (error, response, body){
					a = JSON.parse(body)['activity'];
					b = JSON.parse(body)['accessibility'];
					c = JSON.parse(body)['type'];
					d = JSON.parse(body)['participants'];
					e = JSON.parse(body)['price'];
					f = JSON.parse(body)['link'];
					g = JSON.parse(body)['key'];
				});
				let party = new Activity({
			name: a,
			accessibility: b,
			atype: c,
			participants: d,
			price:  e,
			link:  f,
			key: g
			})
				return party.save();
			},
		},

		randombyPrice:{
				type: ActivityType,
				args:{price:{type: GraphQLFloat}},
				resolve: (parent,args) => {
		//	request('https://www.boredapi.com/api/activity?key=' + args.key)
		request(`https://www.boredapi.com/api/activity?price=${args.price}`, function (error, response, body){
				a = JSON.parse(body)['activity'];
				b = JSON.parse(body)['accessibility'];
				c = JSON.parse(body)['type'];
				d = JSON.parse(body)['participants'];
				e = JSON.parse(body)['price'];
				f = JSON.parse(body)['link'];
				g = JSON.parse(body)['key'];
			});
			let price = new Activity({
		name: a,
		accessibility: b,
		atype: c,
		participants: d,
		price:  e,
		link:  f,
		key: g
		})
			return price.save();
		},
		},

})

});






module.exports = new GraphQLSchema({
    query:RootQuery
});
