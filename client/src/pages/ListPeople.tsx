import { useQuery } from "@apollo/client";
import PersonCard from "../components/PersonCard";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useContext } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { Context } from "../context";
import Loader from "../components/Loader";
import { GET_PEOPLE_QUERY } from "../utils/swarsQuery";
interface PersonType {
  name: string;
  mass: string;
  height: string;
  gender: string;
  homeworld: string;
}

export const ListPeople = () => {
  const { page, setPage } = useContext(Context);

  const queryResult = useQuery(GET_PEOPLE_QUERY, {
    variables: { page },
  });
  const { data, loading, error } = queryResult;

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <PersonCharactersContainer>All Characters</PersonCharactersContainer>
          <PersonRow>
            {data.people &&
              data.people.people &&
              data.people.people.map((person: PersonType) => (
                <PersonCol xs="auto">
                  <PersonCard person={person} />{" "}
                </PersonCol>
              ))}
            <ResponsivePagination
              current={page}
              total={9}
              onPageChange={setPage}
            />
          </PersonRow>
        </>
      )}
    </>
  );
};

const PersonCol = styled(Col)`
  padding: 1rem;
`;

const PersonCharactersContainer = styled(Container)`
  margin-left: 7rem;

  @media (max-width: 767px) {
    margin-left: 3rem;
  }
`

const PersonRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
