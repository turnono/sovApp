require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
// const { createStore } = require('./utils');
const resolvers = require("./resolvers");
const JokeAPI = require("./datasources/joke");

// const store = createStore();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  dataSources: () => ({
    JokeAPI: new JokeAPI(),
  }),
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
  `);
});
