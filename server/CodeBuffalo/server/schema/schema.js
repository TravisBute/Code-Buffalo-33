const graphql = require('graphql');

const activity = require('../model/activity')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat
      } = graphql;

const ActivityType = new GraphQLObjectType({
    name:'Activity',
    fields:() => ({
	accessibility: { type: GraphQLFloat },
	atype: { type: GraphQLString},
	participants: { type: GraphQLInt},
	price: { type: GraphQLFloat},
	link: { type: GraphQLString},
	key: { type: GraphQLID},
	resolve(parent,args){
	   return fetch(`${baseURL}/users`).then(res => res.json())
	  // return activity.findById(parent.key)
	}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
	activity:{
	    type:ActivityType,
	    args:{key:{type: GraphQLID}},
	    resolve(parent,args){
	//	return activity.findById(args.key);	
	    }
	}	
    }	
})



module.exports = new GraphQLSchema({
    query:RootQuery,
   // mutation:Mutation
});

    

