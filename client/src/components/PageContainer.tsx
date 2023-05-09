
import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components';

export const PageContainer = (props: any) => {
  return (
    <WrapperContainer>
        {props.children}
    </WrapperContainer>
  )
}

const WrapperContainer = styled(Container)`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 3rem;
    margin-top: 2rem;

    @media (min-width: 1400px)
    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl,
    .container-xxl {
    max-width: 1140px;
}
  `