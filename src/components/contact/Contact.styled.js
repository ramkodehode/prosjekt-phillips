import styled from 'styled-components';

export const ContactGlobal = styled.div`
  @media (min-width: 1920px) {
    transform: scale(1.2);
  }

  * {
    box-sizing: border-box;
  }
  body {
    padding: 1em;
  }
`;

export const Contact = styled.div``;

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
`;

export const ContactInfo = styled.div`
  background: #ffe6c7;
  margin: 0 0 rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0px;
`;
export const Li = styled.li`
  padding: 5px;
`;

export const Wrapper = styled.div`
  box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);

  > * {
    padding: 1em;
  }

  @media (min-width: 768px) {
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
  height: 200px;
  padding: 1em;
  border: 1px solid #fbd19c;
  resize: none;
`;

export const SubmitButton = styled.input`
  background: #ffe6c7;
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

export const AnchorTag = styled.a`
  text-decoration: none;
  padding-left: 13px;
`;

export const Message = styled.p``;

export const Details = styled.label`
  padding-left: 10px;
`;
