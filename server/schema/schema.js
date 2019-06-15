const graphql = require('graphql');
const Activity = require('../model/activity');

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
    fields: {
	activity:{
	    type: ActivityType,
	    args: {key:{type: GraphQLID}},
	    resolve(parent, args){
		return Activity.findByID(args.id)
	    }
	}
	
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
