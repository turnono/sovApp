const { RESTDataSource } = require('apollo-datasource-rest');

class JokeAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.chucknorris.io/jokes/';
    }

    async getAllChuckCategories() {
        const response = await this.get('categories');
        return Array.isArray(response)
            ? response
            : [];
    }

    async getRandomJokeByCategory({ category }) {
        const joke = await this.get('random', { category });
        return this.jokeReducer(joke);
    }

    jokeReducer(joke) {
        return {
            categories: joke.categories || [],
            icon_url: joke.icon_url,
            id: joke.id,
            url: joke.url,
            value: joke.value
        };
    }
}




module.exports = JokeAPI;
