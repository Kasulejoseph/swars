import { ApolloClient, gql } from "@apollo/client";
import { cache } from "./cache";

const client = new ApolloClient({
  cache,
  uri: process.env.REACT_APP_API_URL,
});

client.query({
  query: gql`
    {
      people(page: 6) {
        next
        previous
        count
        people {
          name
          height
          mass
          homeworld
          gender
        }
      }
    }
  `,
});

export default client
