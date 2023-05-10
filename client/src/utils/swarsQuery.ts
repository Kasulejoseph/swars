import { gql } from "@apollo/client";


export const GET_PEOPLE_QUERY = gql`
  query getPeople($page: Int) {
    people(page: $page) {
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
`;

export const GET_PERSON_QUERY = gql`
  query getPerson($name: String) {
    person(name: $name) {
      name
      height
      mass
      homeworld
      gender
    }
  }
`;