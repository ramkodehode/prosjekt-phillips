import React from 'react';
import {
  Container,
  Goal,
  InnerContainer,
  Values,
  Vision,
} from './Target.styled';

const Target = () => {
  return (
    <Container>
      <InnerContainer>
        <Vision>Vision</Vision>
        <Goal>Mål</Goal>
        <Values>Verdier</Values>
      </InnerContainer>
    </Container>
  );
};

export default Target;
