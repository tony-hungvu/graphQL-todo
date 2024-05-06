import { resolvers } from './src/schema/books.schema';

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql;

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

export default server;
