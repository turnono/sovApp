require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
// const { createStore } = require('./utils');
const resolvers = require("./resolvers");
const JokeAPI = require("./datasources/joke");

// const store = createStore();

// other imports ...
const cors = require("cors");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  dataSources: () => ({
    JokeAPI: new JokeAPI(),
  }),
  cors,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
