import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {

  background-color: #ffcb8d;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 1em;
}
`;

export const ContactInfo = styled.div`
  background: #fcd19b;
  text-align: center;
  margin: 0 0 rem 0;
`;

export const Contact = styled.div`
  background: white;
`;

export const Heading = styled.h1`
  text-align: center;
`;
export const HeadingTwo = styled.h2``;

export const Span = styled.span`
  color: #ffbb40;
`;

export const Paragraph = styled.p`
  margin: 0;
`;

export const Full = styled.div`
  grid-column: 1 / 3;
`;

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
export const Li = styled.li``;

export const Wrapper = styled.div`
  box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);

  > * {
    padding: 1em;
  }

  @media (min-width: 786px) {
    display: grid;
    grid-template-columns: 1fr 2fr;

    > * {
      padding: 2em;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const Label = styled.label`
  display: block;
`;

export const InputName = styled.input`
  width: 100%;
  padding: 1em;
  border: 1px solid #fbd19c;
`;
export const InputEmail = styled.input`
  width: 100%;
  padding: 1em;
  border: 1px solid #fbd19c;
`;
export const TextArea = styled.textarea`
  width: 100%;
  padding: 1em;
  border: 1px solid #fbd19c;
`;

export const SubmitButton = styled.input`
  background: #fbd19c;
  border: 0;
  text-transform: uppercase;

  width: 100%;
  padding: 1em;
  border: 1px solid #fbd19c;

  &:hover,
  &:focus {
    background: #ffa500;
    color: #fff;
    outline: 0;
    transition: background-color 0.5s ease-out;
  }
`;

export const Message = styled.p``;
