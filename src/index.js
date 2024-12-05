const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema'); 

const app = express();

// Create the Apollo Server instance with the schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,  
  introspection: true 
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen(4001, () => {
    console.log('Server is running at http://localhost:4001/graphql');
  });
}

startServer();