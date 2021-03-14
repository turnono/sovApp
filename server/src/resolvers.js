module.exports = {
    Query: {
        categories: (_, __, { dataSources }) =>
            dataSources.JokeAPI.getAllChuckCategories(),
        getRandomJokeByCategory: (_, { category }, { dataSources }) =>
            dataSources.JokeAPI.getRandomJokeByCategory({ category }),

    }
};
