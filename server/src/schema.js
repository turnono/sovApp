const { gql } = require('apollo-server');

const typeDefs = gql`
    type RandomJoke {
        categories: [String]
        icon_url: String
        id: String
        url: String
        value: String
    }

    type Query {
        categories: [String]
        getRandomJokeByCategory(category: String!): RandomJoke
    }
`;

module.exports = typeDefs;
