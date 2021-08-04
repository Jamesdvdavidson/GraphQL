import {ApolloClient, InMemoryCache} from "@apollo/client";

let cache = new InMemoryCache();
const client = new ApolloClient(
    {
        cache: cache,
        uri: 'https://davids44-graphql.herokuapp.com/'
        // uri: 'http://localhost:4000/'
    }
);

export default client;
