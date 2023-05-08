import { gql, useQuery } from "@apollo/client";
import { Container } from "react-bootstrap";

const GET_PERSON_QUERY = gql`
  query getPerson($name: Int!) {
    person(name: $name) {
    name,
    height,
    mass,
    homeworld,
    gender
  }
  }
`;

export const PersonsDetails = (name: string) => {

    const queryResult = useQuery(GET_PERSON_QUERY, {
        variables: { name: "C-3PO" },
      });
      const { data, loading, error } = queryResult;
    
      if (loading) {
        return <div>Loading</div>;
      }
      if (error) {
        return <div>Something went wrong!</div>;
      }

      return (
        <Container>
            <div>Hello</div>
        </Container>
      )

}