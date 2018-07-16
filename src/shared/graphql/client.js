import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_ENDPOINT,
});

export default apolloClient;
