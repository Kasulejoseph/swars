import React from "react";
import { Spinner, Stack } from "react-bootstrap";
import styled from "styled-components";

const Loader = () => (
  <LoaderContainer>
    <Stack direction="horizontal" gap={3}>
      <LoadingText>Loading</LoadingText>
      <Spinner size="sm" animation="grow" />
      <Spinner size="sm" animation="grow" />
      <Spinner size="sm" animation="grow" />
    </Stack>
  </LoaderContainer>
);

const LoadingText = styled.div`
  font-size: larger;
  font-weight: 500;
`;

const LoaderContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;

  @media (max-width: 767px) {
    top: 25%;
  }
`;

export default Loader;
