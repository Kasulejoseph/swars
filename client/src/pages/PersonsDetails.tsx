import { useQuery } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import PersonDetailsCard from "../components/PersonDetailsCard";
import Loader from "../components/Loader";
import { GET_PERSON_QUERY } from "../utils/swarsQuery";

export const PersonsDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const queryResult = useQuery(GET_PERSON_QUERY, {
    variables: { name: state.name },
  });
  const { data, loading, error } = queryResult;

  if (error) {
    return <div>Something went wrong!</div>;
  }

  const navigateBack = () => navigate(-1);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <PersonDetailsCard person={data.person} navigateBack={navigateBack} />
      )}
    </>
  );
};
