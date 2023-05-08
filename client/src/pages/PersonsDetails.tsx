import { gql, useQuery } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import PersonDetailsCard from "../components/PersonDetailsCard";

const GET_PERSON_QUERY = gql`
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

export const PersonsDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const queryResult = useQuery(GET_PERSON_QUERY, {
    variables: { name: state.name },
  });
  const { data, loading, error } = queryResult;

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Something went wrong!</div>;
  }

  const navigateBack = () => navigate(-1)

  return (
    <PersonDetailsCard person={data.person} navigateBack={navigateBack} />
  );
};
