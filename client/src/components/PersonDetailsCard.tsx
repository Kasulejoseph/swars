import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

interface PersonType {
  name: string;
  mass: string;
  height: string;
  gender: string;
  homeworld: string;
}

interface PersonObjType {
  person: [PersonType];
  navigateBack: () => void;
}

const PersonDetailsCard = ({ person, navigateBack }: PersonObjType) => {
  const { name, gender, mass, height } = person[0];
  return (
    <Container>
      <PersonsDetailsBackButton
        size="sm"
        variant="secondary"
        onClick={navigateBack}
      >
        go back
      </PersonsDetailsBackButton>
      <PersonsDetailsRow >
        <Col>
          {/* use random images */}
          <img
            height={"100%"}
            width={"100%"}
            src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcndhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
            alt=""
          />
        </Col>
        <PersonsDetailsCol>
          <span>Name: {name}</span>
          <span>Gender: {gender}</span>
          <span> Mass: {mass}</span>
          <span>Height: {height}</span>
        </PersonsDetailsCol>
      </PersonsDetailsRow>
    </Container>
  );
};

const PersonsDetailsBackButton = styled(Button)`
  margin-top: 2rem;
`;

const PersonsDetailsCol = styled(Col)`
  display: grid;
`;

const PersonsDetailsRow = styled(Row)`
  position: absolute;
  top: 22%;
`

export default PersonDetailsCard;
