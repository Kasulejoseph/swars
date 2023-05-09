import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface PersonType {
  name: string;
  mass: string;
  height: string;
  gender: string;
  homeworld: string;
}

interface PersonObjType {
  person: PersonType;
}

const PersonCard = ({ person }: PersonObjType) => {
  const navigate = useNavigate();

  const navigateTo = (name: string) => {
    return (event: React.MouseEvent<HTMLElement>) => {
      console.log(`Navigating to ${name}`);
      navigate("/person", {
        state: { name },
      });
    };
  };

  return (
    <PersonListCard onClick={navigateTo(person.name)}>
      {/* use random images instead of hard-coding */}
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcndhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
      />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col>Height: {person.height}</Col>
            <PersonListColMass> Mass: {person.mass}</PersonListColMass>
          </Row>
        </Card.Text>
      </Card.Body>
    </PersonListCard>
  );
};

const PersonListCard = styled(Card)`
  padding: 0;
  width: 15rem;
  cursor: pointer;
`;

const PersonListColMass = styled(Col)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default PersonCard;
