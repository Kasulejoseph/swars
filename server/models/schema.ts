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
    people(page: Int): PeopleConnection!
    person(name: String): [Person]
  }

  type PeopleConnection {
    next: String
    previous: String
    count: Int!
    people: [Person]!
  }
`;

export default typeDefs;
