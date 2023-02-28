import styled from 'styled-components';

const Container = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 800px;
  border: 2px blue solid;
`;

const Form = styled.form`
  border: 2px red solid;
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    border-color: green;
    width: 100%;
    height: 600px;
  }
`;

function ContactForm() {
  return (
    <>
      <Container>
        <Form>ContactForm</Form>
      </Container>
    </>
  );
}

export default ContactForm;
