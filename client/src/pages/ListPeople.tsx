import { gql, useQuery } from "@apollo/client";
import PersonCard from "../components/PersonCard";
import { Col, Container, Row } from "react-bootstrap";

const GET_PEOPLE_QUERY = gql`
  query getPeople($page: Int!) {
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

interface PersonType {
  name: string;
  mass: string;
  height: string;
  gender: string;
  homeworld: string;
}

export const ListPeople = () => {
  const queryResult = useQuery(GET_PEOPLE_QUERY, {
    variables: { page: 1 },
  });
  const { data, loading, error } = queryResult;

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <Container fluid>
      <Row style={{ padding: "0px" }}>
        {data.people.people.map((person: PersonType) => (
          <Col xs="auto" style={{ padding: "1rem" }}>
            <PersonCard person={person} />{" "}
          </Col>
        ))}
      </Row>
    </Container>
  );
};
