// this setup the express app
const express = require('express');

// now setup the graphql to work with express aplication
const graphqlHTTP = require('express-graphql');

//import schema
const schema = require('./schema/schema');

const app = express();
//allow cross origin connect
const cors = require('cors');
app.use(cors());

//set up app invoking function to create app


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Justin:Code@cluster0-xmcyn.mongodb.net/test?retryWrites=true&w=majority');
//connect to mlab database somehow
mongoose.connection.once('open',() => {
  console.log('connected to database');
});
//middleware to handle graphql request
app.use('/graphql', graphqlHTTP({
    //need to pass schema into here to work
    schema,
    graphiql:true
}));


//tell app to listen to a certain port on computer

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
