import { ApolloClient, createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({ 
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/__YOUR_KEY__'
  })
});

export function provideClient(): ApolloClient {
  return client;
}
