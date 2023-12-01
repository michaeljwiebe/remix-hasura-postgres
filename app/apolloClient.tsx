import { ApolloClient, InMemoryCache } from '@apollo/client/core/core.cjs';

export const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});