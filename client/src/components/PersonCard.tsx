import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";


interface PersonType {
  name: string;
  mass: string;
  height: string;
  gender: string;
  homeworld: string;
}

interface PersonObjType {
  person: PersonType
}



const PersonCard = ({person}: PersonObjType) => {
  console.log(person);
  
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcndhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col>Height: {person.height}</Col>
            <Col> Mass: {person.mass}</Col>
          </Row>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default PersonCard;