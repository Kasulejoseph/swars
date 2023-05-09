
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

const WrapperContainer = styled(Container)({
    width: '100%',
    margin: '0 auto',
    marginBottom: '3rem',
    marginTop: '2rem'
  })