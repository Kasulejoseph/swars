import { gql } from "apollo-server";

const typeDefs = gql`
  type Person {
    name: String
    height: String
    mass: String
    homeworld: String
    gender: String
  }

  type Query {
    people(page: Int): [Person]
    person(name: String): [Person]
  }
`;

export default typeDefs;
